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
        var testUtils2 = new LotusMVW.TestUtils(contenxt);
        expect( testUtils2.eventDispatcherFactory instanceof  LotusMVW.EventDispatcherFactory).toBe(true);
        expect( testUtils2.httpFactory instanceof  LotusMVW.HttpServiceFactory).toBe(true);
        expect( testUtils2.context instanceof  LotusMVW.TestContext).toBe(true);
        expect( testUtils2.testObject instanceof  LotusMVW.TestObject).toBe(true);
        expect( testUtils2.testObject2 instanceof  LotusMVW.TestObject).toBe(true);
        expect( testUtils2.testObject.id == testUtils.testObject.id).toBe(false);
        expect( testUtils2.testObject2.id == testUtils.testObject2.id).toBe(false);
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
