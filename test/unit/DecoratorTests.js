/**
 * Created by dsmiley on 1/13/14.
 */
'use strict';

/* jasmine specs for controllers go here */
describe('Decorator Tests ', function () {

    it('check Decorator functions', function (done) {
        //setup the context
        var contenxt = new LotusMVW.TestContext({})
        var testUtils = new LotusMVW.TestUtils(contenxt);
        //test injections
        expect( testUtils.eventDispatcherFactory instanceof  LotusMVW.EventDispatcherFactory).toBe(true);
        expect( testUtils.httpFactory instanceof  LotusMVW.HttpServiceFactory).toBe(true);
        expect( testUtils.context instanceof  LotusMVW.TestContext).toBe(true);
        expect( testUtils.testObject instanceof  LotusMVW.TestObject).toBe(true);
        expect( testUtils.testObject2 instanceof  LotusMVW.TestObject).toBe(true);
        expect( testUtils.testObject3 instanceof  LotusMVW.TestObject).toBe(true);
        expect( testUtils.testObjectSub instanceof  LotusMVW.TestObjectSub).toBe(true);
        expect( testUtils.testObjectSub.eventDispatcherFactory instanceof  LotusMVW.EventDispatcherFactory).toBe(true);
        expect( testUtils.testObjectSub.httpFactory instanceof  LotusMVW.HttpServiceFactory).toBe(true);
        //test injection with parameters
        expect( testUtils.testObject3.id == '1234').toBe(true);
        expect( testUtils.testObject3.label == 'myLabel').toBe(true);
        expect( testUtils.testObject4.id == '4321').toBe(true);
        expect( testUtils.testObject4.label == 'label').toBe(true);
        //check that each instance gets new values where applicable
        var testUtils2 = new LotusMVW.TestUtils(contenxt);
        expect( testUtils2.eventDispatcherFactory instanceof  LotusMVW.EventDispatcherFactory).toBe(true);
        expect( testUtils2.httpFactory instanceof  LotusMVW.HttpServiceFactory).toBe(true);
        expect( testUtils2.context instanceof  LotusMVW.TestContext).toBe(true);
        expect( testUtils2.testObject instanceof  LotusMVW.TestObject).toBe(true);
        expect( testUtils2.testObject2 instanceof  LotusMVW.TestObject).toBe(true);
        expect( testUtils2.testObject.id == testUtils.testObject.id).toBe(false);
        expect( testUtils2.testObject2.id == testUtils.testObject2.id).toBe(false);
        //test injection with parameters
        expect( testUtils2.testObject3.id == '1234').toBe(true);
        expect( testUtils2.testObject3.label == 'myLabel').toBe(true);
        expect( testUtils2.testObject4.id == '4321').toBe(true);
        expect( testUtils2.testObject4.label == 'label').toBe(true);
        //test binding injection
        expect( typeof testUtils.notify == 'function').toBe(true);
        var handler = {
            onValueChange:function(value){
                done()
            }
        }
        testUtils.binder.bind(testUtils, 'bindingTest', handler, 'onValueChange');
        testUtils.bindingTest = {test:'test'};
    });
});
