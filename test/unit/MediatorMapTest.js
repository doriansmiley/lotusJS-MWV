/**
 * Created by dsmiley on 9/15/16.
 */
'use strict';

/* jasmine specs for controllers go here */
describe('MediatorMap', function () {

    it('check functions', function () {
        var context = {};
        //LotusMVW.AbstractMediator
        var mediatorMap = new LotusMVW.MediatorMap(context);
        expect(mediatorMap.context).toBe(context);
        expect(typeof mediatorMap.tagConstructorMap == 'object').toBe(true);
        expect(typeof mediatorMap.mediatorInstanceMap == 'object').toBe(true);
        mediatorMap.add('x-lotus-button',LotusMVW.AbstractMediator);
        mediatorMap.add('x-lotus-data-grid',LotusMVW.AbstractMediator);
        mediatorMap.add('x-lotus-button',LotusMVW.AbstractMediator);
        mediatorMap.add('x-lotus-list',LotusMVW.AbstractMediator);
        //add singleton tag test
        mediatorMap.add('x-lotus-service-status',LotusMVW.AbstractMediator, true);
        mediatorMap.add('x-lotus-service-status',LotusMVW.AbstractMediator, true);
        mediatorMap.add('x-lotus-service-status',LotusMVW.AbstractMediator, true);
        mediatorMap.add('x-lotus-service-status',LotusMVW.AbstractMediator, true);
        expect(mediatorMap.tagConstructorMap['x-lotus-button'].constructor).toBe(LotusMVW.AbstractMediator);
        expect(mediatorMap.tagConstructorMap['x-lotus-button'].useSingleton).toBe(false);
        expect(mediatorMap.tagConstructorMap['x-lotus-data-grid'].constructor).toBe(LotusMVW.AbstractMediator);
        expect(mediatorMap.tagConstructorMap['x-lotus-data-grid'].useSingleton).toBe(false);
        expect(mediatorMap.tagConstructorMap['x-lotus-list'].constructor).toBe(LotusMVW.AbstractMediator);
        expect(mediatorMap.tagConstructorMap['x-lotus-list'].useSingleton).toBe(false);
        expect(mediatorMap.tagConstructorMap['x-lotus-service-status'].constructor).toBe(LotusMVW.AbstractMediator);
        expect(mediatorMap.tagConstructorMap['x-lotus-service-status'].useSingleton).toBe(true);
        var buttonInstance = new Lotus.AbstractItemView();
        var abstractInstance = new Lotus.AbstractComponent();
        mediatorMap.apply('x-lotus-button', buttonInstance);
        mediatorMap.apply('x-lotus-button', buttonInstance);
        mediatorMap.apply('x-lotus-button', buttonInstance);
        mediatorMap.apply('x-lotus-service-status', abstractInstance);
        mediatorMap.apply('x-lotus-service-status', abstractInstance);
        mediatorMap.apply('x-lotus-service-status', abstractInstance);
        mediatorMap.apply('x-lotus-data-grid', abstractInstance);
        mediatorMap.apply('x-lotus-data-grid', abstractInstance);
        mediatorMap.apply('x-lotus-list', abstractInstance);
        mediatorMap.apply('x-lotus-list', abstractInstance);
        expect(mediatorMap.mediatorInstanceMap[mediatorMap.tagConstructorMap['x-lotus-button'].id].length).toBe(3);
        expect(mediatorMap.mediatorInstanceMap[mediatorMap.tagConstructorMap['x-lotus-data-grid'].id].length).toBe(2);
        expect(mediatorMap.mediatorInstanceMap[mediatorMap.tagConstructorMap['x-lotus-service-status'].id].length).toBe(1);
        expect(mediatorMap.mediatorInstanceMap[mediatorMap.tagConstructorMap['x-lotus-list'].id].length).toBe(2);
        var mapId = mediatorMap.remove('x-lotus-button',LotusMVW.AbstractMediator);
        expect(mediatorMap.mediatorInstanceMap[mapId]).toBe(undefined);
        expect(mediatorMap.mediatorInstanceMap[mediatorMap.tagConstructorMap['x-lotus-data-grid'].id].length).toBe(2);
        expect(mediatorMap.mediatorInstanceMap[mediatorMap.tagConstructorMap['x-lotus-service-status'].id].length).toBe(1);
        expect(mediatorMap.mediatorInstanceMap[mediatorMap.tagConstructorMap['x-lotus-list'].id].length).toBe(2);
        //test passing invalid tag
        mapId = mediatorMap.remove('x-lotus-invalid',LotusMVW.AbstractMediator);
        expect(mapId).toBe(undefined);
        mapId = mediatorMap.remove('x-lotus-data-grid',LotusMVW.AbstractMediator);
        expect(mediatorMap.mediatorInstanceMap[mapId]).toBe(undefined);
        expect(mediatorMap.mediatorInstanceMap[mediatorMap.tagConstructorMap['x-lotus-service-status'].id].length).toBe(1);
        expect(mediatorMap.mediatorInstanceMap[mediatorMap.tagConstructorMap['x-lotus-list'].id].length).toBe(2);
        mapId = mediatorMap.remove('x-lotus-list',LotusMVW.AbstractMediator);
        expect(mediatorMap.mediatorInstanceMap[mapId]).toBe(undefined);
        expect(mediatorMap.mediatorInstanceMap[mediatorMap.tagConstructorMap['x-lotus-service-status'].id].length).toBe(1);
        mapId = mediatorMap.remove('x-lotus-service-status',LotusMVW.AbstractMediator);
        expect(mediatorMap.mediatorInstanceMap[mapId]).toBe(undefined);
        expect(mediatorMap.tagConstructorMap['x-lotus-button']).toBe(undefined);
        expect(mediatorMap.tagConstructorMap['x-lotus-data-grid']).toBe(undefined);
        expect(mediatorMap.tagConstructorMap['x-lotus-list']).toBe(undefined);
        expect(mediatorMap.tagConstructorMap['x-lotus-service-status']).toBe(undefined);
    });
});