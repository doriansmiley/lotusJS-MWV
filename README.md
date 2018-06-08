# lotusJS-MWV
An MVW framework for building HTML5 applications based on lotusJS web components

[![Join the chat at https://gitter.im/lotusJS/Lobby](https://badges.gitter.im/lotusJS/Lobby.svg)](https://gitter.im/lotusJS/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![](https://data.jsdelivr.com/v1/package/npm/lotusjs-mvw/badge)](https://www.jsdelivr.com/package/npm/lotusjs-mvw)

- [npm Package Manager](#npm-package-manager)
- [Typescript Source](#typescript-source)
- [Web Component View](#web-component-view)
- [Dependency Injection](#dependency-injection)
- [Central Event Bus](#central-event-bus)
- [Command Map](#command-map)
- [View Mediators](#view-mediators)
- [Data Binding](#data-binding)
- [Sand Boxed Context](#sand-boxed-context)
- [Examples](#examples)

# npm Package Manager

The lotus module is distributed through npm and can be added to your project using `npm install lotusjs-components`. For more check us out on npm.

# Typescript Source

The lotus core is built using Typescript which enables us to fully implement common OOP patterns and controls within our codebase. You can also use lotus as a typescript module if you are already working in Typescript as well. Sample application coming soon!

# Web Component View

lotusJS-MWV uses the [lotusjs-components](https://www.npmjs.com/package/lotusjs-components) framework to allow you to create custom tags that encapsulate abstract functionality such as data grids, lists, buttons, image galleries, and more.
Further, views can be mediated to provide application level event mediation, data binding, and virtually any other behavior that is specific to the
surrounding application.

Check out [lotusjs-components](https://www.npmjs.com/package/lotusjs-components) for tutorials and examples of how to create your web component views.

# Dependency Injection

LotusMVW ships with a built in injector. It supports both an imperative and declarative syntax. Using the imperative syntax you can define objects for injection as follows:

````
SampleApp.Context = function (model, params) {
    this.model = model;
    Lotus.Context.prototype.constructor.call(this, this,model.config, params);
}
/************* Inherit from Subject for data binding *************/
Lavender.ObjectUtils.extend(Lotus.Context, SampleApp.Context);

SampleApp.Context.prototype.mapObjects = function(){
    //map objects for construction
    this.injector.mapObject(SampleApp.HTTP_SERVICE_KEY, SampleApp.HttpServiceFactory.getInstance().getHttpServiceForInjection(this.config));
    //Map singletons
    this.injector.mapSingletonInstance(SampleApp.SERVICE_RESULT_PARSER_KEY, SampleApp.SerializeFactory.getInstance().getServiceResultParser(this.config));
    this.injector.mapSingletonInstance(SampleApp.SERIALIZE_FACTORY_KEY, SampleApp.SerializeFactory.getInstance());
    this.injector.mapSingletonInstance(SampleApp.APP_SERVICES, new SampleApp.SampleService(this.config));
    this.injector.mapSingletonInstance(SampleApp.EVENT_DISPATCHER_KEY, LotusMVW.EventDispatcherFactory.getInstance().getEventDispatcher( this.config ));
    this.injector.mapSingletonInstance(SampleApp.MODEL_KEY, this.model);
}
...
````

Note you can map objects that will be created by the IOC container using `mapObject` or map to a singleton using `mapSingletonInstance`. You can still use factories to set up your injections. This is useful when you want to be able to change injections without effecting application code using a config file.

To inject objects you use the context's injector as follows:

````
var context = SampleApp.init();
context.injector.inject(SampleApp.HTTP_SERVICE_KEY)
````

Where `SampleApp` is defined as follows:

````
//global namespace for app
SampleApp = function(){

}

SampleApp.init = function(){
    return new SampleApp.Context(SampleApp.Model());
}
````

If you are working in typescript you can take advantage of class decorators and use the declarative syntax. In order to inject into a class you must first mark it as injectable. For example:

````
@injectable
export class HttpServiceFactory
````

The `@injectable` decorator will use the reflection API to include the required code to support injections. You can then inject instances into properties as follows:

````
@inject
public serviceFactory:HttpServiceFactory;
````

Please note that using decorators will increase the size of your application. For this reason we encourage people to use the imperative syntax instead of the declarative syntax.

# Central Event Bus

LotusMVW includes a central event bus to handle dispatching application level events, and registering listeners for this events. This central event bus should not be confused with, or used in, your Lotus web components. Web components extend `Lavender.AbstractEventDispatcher` and can dispatch events directly by calling their `dispatch` method.

The event bus is located on the applications context and can by defined for dependency injection as follows:
````
this.injector.mapSingletonInstance(SampleApp.EVENT_DISPATCHER_KEY, LotusMVW.EventDispatcherFactory.getInstance().getEventDispatcher( this.config ));
````
You can then access the event bus as follows:
````
SampleApp.resources.injector.inject(SampleApp.EVENT_DISPATCHER_KEY);
````
To add an event listener you call its `addEventDispatcher` method:
````
var eventBus = SampleApp.resources.injector.inject(SampleApp.EVENT_DISPATCHER_KEY);
eventBus.addEventListener('eventType', this, 'myEventHandler');
````
Where `eventType` is the event that will be dispatched, `this` is a reference to the instance adding the listener, and `myEventHandler` is an instance method of the instance adding the listener (`this`).

To remove an event listener you call its `removeEventListener` method:
````
var eventBus = SampleApp.resources.injector.inject(SampleApp.EVENT_DISPATCHER_KEY);
eventBus.removeEventListener('eventType', this, 'myEventHandler');
````
To see if the event bus can listen call its `canListen` method:
````
var eventBus = SampleApp.resources.injector.inject(SampleApp.EVENT_DISPATCHER_KEY);
eventBus.canListen('eventType', this, 'myEventHandler');
````
To dispatch and event on the event bus:
````
var eventBus = SampleApp.resources.injector.inject(SampleApp.EVENT_DISPATCHER_KEY);
eventBus.dispatch(new Lavender.AbstractEvent('testEvent1', {data:myData}));
````
Where `testEvent1` is the event type and `{data:myData}` is data that will be added to the event payload and can be accessed using `event.payload.data`. You can define any object structure you like for the event payload for example `{myData:myData, moreData:moreData}` which can be accessed using `event.payload.myData` and `event.payload.moreData`.

While this example uses `Lavender.AbstractEvent` you should never dispatch this event object. Instead extend `Lavender.AbstractEvent` and create your own custom event objects. For example:
````
SampleApp.AppEvent = function( eventType, payload ){
    if( eventType == SampleApp.AppEvent.ITEM_SELECTED && ( payload.item === null || payload.item === undefined ) ){
        throw  new Error('SampleApp.AppEvent payload.item is required');
    }
    Lavender.AbstractEvent.prototype.constructor.call(this, eventType, payload);
}
/************* Inherit from Subject for data binding *************/
Lavender.ObjectUtils.extend( Lavender.AbstractEvent, SampleApp.AppEvent );

SampleApp.AppEvent.prototype.clone = function(){
    return new SampleApp.AppEvent( this.type, this.payload)
}

SampleApp.AppEvent.LOAD_IMAGES = 'smpLoadImages';
SampleApp.AppEvent.IMAGES_LOADED = 'smpImagesLoaded';
````

# Command Map

LotusMVW includes a command map that maps both fresh instances and singleton instance of a command to an event dispatched by the central event bus. Below is an example of how to map a command:
````
SampleApp.Context.prototype.mapCommands = function(){
    //triggers loading of images
    this.commandMap.addCommand( Lavender.RecordSetEvent.LOAD_PAGE_DATA, SampleApp.LoadImageAssetsCommand );
    // you can optionally pass functionName and useSingleton
    //functionName defaults to 'execute'
    //if useSingleton is true only a single instance of the command will be executed when the events is dispatched, use this options with extreme caution
    //this.commandMap.addCommand( 'testEvent1', LotusMVW.SampleCommand, 'myFunction', true )
}
````
In this example the function to execute defaults to `execute`. But as the comments explain you can pass the function name as an optional argument. For example:
````
this.commandMap.addCommand( Lavender.RecordSetEvent.LOAD_PAGE_DATA, SampleApp.LoadImageAssetsCommand, 'myFunction' );
````
In this example the `myFunction` instance method will be called passing the event object. And to register `SampleApp.LoadImageAssetsCommand` as a singleton calling `myFunction` you simply add:
````
this.commandMap.addCommand( Lavender.RecordSetEvent.LOAD_PAGE_DATA, SampleApp.LoadImageAssetsCommand, 'myFunction', true );
````
LotusMVW ships with `LotusMVW.AbstractCommand` which is a useful base class if you do not intend to create your own command implementation. Commands do not need to extend `LotusMVW.AbstractCommand`, but it is recommended you do so as it will reduce the amount of redundant code in your application, and allow commands to be easily reused in other applications. For a complete example of implementing a subclass of `LotusMVW.AbstractCommand` see the `SampleApp.LoadImageAssetsCommand` implementation that's part of our [sample application under the examples directory](https://github.com/doriansmiley/lotusJS-MWV/tree/dev/example/sampleApp).

# View Mediators

View mediation is an important part of MVW frameworks that enables essentially dumb views to participate in the surrounding application without knowing or caring about their involvement. In most implementations this includes things like binding your application's model data to instance attributes of your view, and delegating events dispatched by your view to the central event bus. To map a mediator to a component in Lotus you do the following in your application's context:
````
SampleApp.Context.prototype.mapMediators = function(){
    this.mediatorMap.add('x-lotus-image-gallery',SampleApp.ImageGalleryMediator);
    //you can optionally add a singleton instance using the following form
    //context.mediatorMap.add('x-lotus-image-gallery',SampleApp.ImageGalleryMediator,true);
}
````
In this example all instances of the `x-lotus-image-gallery` custom tag found in the DOM will be mapped to an instance of `SampleApp.ImageGalleryMediator`. If you want to use a singleton instance you simply supply `true` as the optional third parameter:
````
context.mediatorMap.add('x-lotus-image-gallery',SampleApp.ImageGalleryMediator,true);
````
All mediators must extend `LotusMVW.AbstractMediator` and the MUST OVERRIDE `LotusMVW.AbstractMediator.toString` returning the name of the constructor function. For example below is the `toString` override found in `SampleApp.ImageGalleryMediator`:
````
SampleApp.ImageGalleryMediator.toString = function(){
    return 'SampleApp.ImageGalleryMediator';
}
````
Mediators should also implement the `init` method. The `init` method is called once the tag is processed by x-tag and the Lotus component map. This ensures your component instance is completely constructed and its `element` property defined before your mediator set up code is triggered. Below is the init method from `SampleApp.ImageGalleryMediator`
````
SampleApp.ImageGalleryMediator.prototype.init = function () {
    LotusMVW.AbstractMediator.prototype.init.call(this);
    var recordSetLabel = this.componentInstance.element.getAttribute('source');//note the attribute recordset should be set on the element identified as your component root in your template file (templates/imageGallery.html)
    var model = this.context.injector.inject(SampleApp.MODEL_KEY);
    if( model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel] === null || model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel] === undefined ){
        //create the record set for the source if it's not already defined
        model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel] = new Lavender.RecordSet(null, Lavender.ArrayList);
        model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel].createdOn = new Date();
        model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel].id = Lavender.UuidUtils.generateUUID();
        model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel].recordsPerPage = model.config.galleryItemsPerPage;
        model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel].results.allowDuplicates = true;
        model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel].source = recordSetLabel;
    }

    this.componentInstance.collection = model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel];
    this.componentInstance.collection.addEventListener(Lavender.RecordSetEvent.LOAD_PAGE_DATA, this, 'onLoadPageData');
    this.componentInstance.collection.selectedPage = 1;//will trigger data load
}
````
Be sure you call `LotusMVW.AbstractMediator.prototype.init.call(this);` as the first call in your `init` method. In this example the component creates a recordset object in the model and assigns it to the component. The component uses this collections as its data provider for constructing collection items.

Mediators are critical to ensuring your view components remain abstract and properly encapsulated so they can be reused across many applications. You are heavily encouraged to use them.

For a complete example of how to implement view mediators soo our [sample application under the examples directory](https://github.com/doriansmiley/lotusJS-MWV/tree/dev/example/sampleApp) and our [button example](https://github.com/doriansmiley/lotusJS/tree/dev/example/button).

# Data Binding

Lotus incorporates Lavender's data binding utilities to define bindable end points in your objects, and to set up data bindings.
Before you can bind to a property of an object you have to make sure your object extends `Lavender.Subject` somehwere is its inheritance chain, and you must make sure
to call the object's `notify` method when changes occur. For example:
````
 //start binding source set up. This is a crude example. Most application should use a MVW framework like lotusjs-mwv set create data models and apply bindings using mediators.
        //below we create a source for data binding. Components should always effect an application model instead of acting on the view directly
        //you can then use two way data bindings on the model to keep your components in sync with model. Changes in the model are then resolved by the component.
        var BindingSource = function(){
            Lavender.Subject.prototype.constructor.call(this);
            var _selectedItem;
            var _collection = new Lavender.ArrayList();
            this.addProperties({
                selectedItem: {
                    get: function () {
                        return _selectedItem;
                    },
                    set: function (val) {
                        _selectedItem = val;
                        this.notify(val, "selectedItem");
                    }
                },
                collection: {
                    get: function () {
                        return _collection;
                    },
                    set: function (val) {
                        _collection = val;
                        this.notify(val, "collection");
                    }
                }
            });
            //set up pour collection
            this.collection.addItem({label: 'Sunset 1', value: 'assets/photos/Sunset_2007-1.jpg', src: 'assets/photos/Sunset_2007-1.jpg', selected:true});
            this.collection.addItem({label: 'Sunset 2', value: 'assets/photos/Sunset-socialphy.com_.jpg', src: 'assets/photos/Sunset-socialphy.com_.jpg'});
            this.collection.addItem({label: 'Sunset 3', value: 'assets/photos/sunset-birds1.jpg', src: 'assets/photos/sunset-birds1.jpg'});
            this.collection.addItem({label: 'Full Moon', value: 'assets/photos/FullMoon2010.jpg', src: 'assets/photos/FullMoon2010.jpg'});
            //set the selected item
            this.selectedItem = this.collection.getItemAt(0);

            BindingSource.prototype.setSelectedItemFromCollectionView = function(item){
                if(item && item.model != this.selectedItem ){
                    this.selectedItem = item.model;
                }
            }
        };
````
In this example `BindingSource` defines the bindable end points `selectedItem` and `collection`inside the call to `addProperties`.
The `addProperties` method is defined in the Lavender's binding utilities and incorporated through `BindingSource` extension of `Lavender.Subject`.
Notice the call to `notify`. Lavender's binding utilities are an implementation of the Observer pattern, and the call to `notify` handles notification for all registered observers.

IMPORTANT: `Lotus.SkinPart` and `Lotus.AbstractComponent` already extend `Lavender.Subject`.

Once you define a bindable end point you can bind to it.
````
bindingSource.binder.bind(bindingSource, 'selectedItem', component, 'model');
````
The `binder` property is inherited through `Lavender.Subject` and is an instance of the `Lavender.Binder` object.
Whenever the `bindingSource.selectedItem` property changes `component.model` will be updated with the new value.
In this example the `component.model` attribute is also a bindable end point declared in the same manner, but it does not have to be. It could also be a plain old JavaScript attribute.
If you want to enable two way data binding, for example:
````
bindingSource.binder.bind(bindingSource, 'selectedItem', component, 'model');
bindingSource.binder.bind(component, 'model', bindingSource, 'selectedItem');
````
you have to make sure `component.model` is also a bindable end point.

You can also bind to methods, instance varibales and accessor methods of plain old Javascript objects.
Just remeber if you want an object to be a bindable end point that can notify observers of changes you must extend `Lavender.Subject`
and they must create bindable end points by declaring accessor methods that call `this.notify(value, 'attribute')` where `value` is the new value and `attribute` is the name of the attribute.

IMPORTANT: in order to prevent recursion the Lavender core automatically checks that incoming values of attribute bindings are different than the one currently applied.
````
if (this.instance[this.chainProp] != value) {
    this.instance[this.chainProp] = value;
}
````
However it does not do this if the property in the chain is a function. Be sure if you setup functions as binding callbacks they check that the incoming value is different than the current one.
For example:
````
BindingSource.prototype.setSelectedItemFromCollectionView = function(item){
    if(item && item.model != this.selectedItem ){
        this.selectedItem = item.model;
    }
}
````
This handles cases where attributes are set to a `null` value as part of a `destroy` process, and ensures the value is actually out of sync. This prevents recursion when two way bindings are applied.

For a complete example of two way data binding so our [image component example](https://github.com/doriansmiley/lotusJS/tree/dev/example/image).

# Sand Boxed Context

All application services are sand boxed to the application's context. This allows for distributing your applications as  reusable modules. Simply minify your application, include it in your project, and instantiate the context.

TODO: module example

# Light Weight

Both the Lotus (32kb) and Lavander (51kb) frameworks total only 83 kb combined. That's a lot of power in a small package.

# Examples
For a complete example of how to implement Lotus in an application using the IOC container see our [sample application under the examples directory](https://github.com/doriansmiley/lotusJS-MWV/tree/dev/example/sampleApp).
Check out [lotusjs-components](https://www.npmjs.com/package/lotusjs-components) for tutorials and examples of how to create your web component views.

# Create custom components built on Lotus and offer them through the component exchange

TODO

# Create custom skins and offer them through the component exchange

TODO
