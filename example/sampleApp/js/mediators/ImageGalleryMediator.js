/**
 * Created by dsmiley on 9/15/16.
 */
SampleApp.ImageGalleryMediator = function (componentInstance, context) {
    LotusMVW.AbstractMediator.prototype.constructor.call(this, componentInstance, context);
    
}
/************* Inherit from AbstractEventDispatcher for event dispatching *************/
Lavender.ObjectUtils.extend(LotusMVW.AbstractMediator, SampleApp.ImageGalleryMediator);

SampleApp.ImageGalleryMediator.toString = function(){
    return 'SampleApp.ImageGalleryMediator';
}

SampleApp.ImageGalleryMediator.prototype.onLoadPageData = function (event) {
    //trigger application level behavior by mediating the event. Good encapsulation dictates that reusable view components not have knowledge of nor trigger applicaiton level behaviors
    //TODO: we need to replace Lavender.RecordSetEvent.LOAD_PAGE_DATA with a component specific event, like MyAppEvent.LOAD_IMAGE_ASSETS
    this.context.eventDispatcher.dispatch(new Lavender.RecordSetEvent(Lavender.RecordSetEvent.LOAD_PAGE_DATA, {recordSet:this.componentInstance.recordSet}));
}

SampleApp.ImageGalleryMediator.prototype.init = function () {
    LotusMVW.AbstractMediator.prototype.init.call(this);
    var recordSetLabel = this.componentInstance.element.getAttribute('data-source');//note the attribute recordset should be set on the element identitifed as your component root in your template file (templates/imageGallery.html)
    var model = this.context.injector.inject(SampleApp.MODEL_KEY);
    if( model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel] === null || model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel] === undefined ){
        //create the record set for the source if it's not already defined
        model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel] = new Lavender.RecordSet(NaN, Lavender.ArrayList);
        model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel].createdOn = new Date();
        model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel].id = Lavender.UuidUtils.generateUUID();
        model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel].recordsPerPage = model.config.galleryItemsPerPage;
        model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel].results.allowDuplicates = true;
        model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel].source = recordSetLabel;
    }

    this.componentInstance.recordSet = model.recordsetModel.recordSets.recordSetsBySource[recordSetLabel];
    this.componentInstance.recordSet.addEventListener(Lavender.RecordSetEvent.LOAD_PAGE_DATA, this, 'onLoadPageData');
    this.componentInstance.recordSet.selectedPage = 1;//will trigger data load
}

SampleApp.ImageGalleryMediator.prototype.removeEventListeners = function () {
    this.componentInstance.recordSet.removeEventListener(Lavender.RecordSetEvent.LOAD_PAGE_DATA, this, 'onLoadPageData');
}