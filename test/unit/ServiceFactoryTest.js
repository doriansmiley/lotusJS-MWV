'use strict';

/* jasmine specs for controllers go here */
describe('ServiceFactory Test', function () {

    describe('Test access to singletom', function () {

        it('check model and default values', function () {
            var service = LotusMVW.ServiceFactory.getInstance();
            expect(service).toBeDefined();
            expect(service.getService).toBeDefined();
            expect(service.getService( new Lavender.Config() ).constructor.name == LotusMVW.SampleService.name).toBe(true);
        });

    });
});
