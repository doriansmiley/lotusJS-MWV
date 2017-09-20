/**
 * Created by dsmiley on 1/23/14.
 */
'use strict';
describe('CommandMapTest', function () {
    var context = {eventDispatcher:new Lavender.EventDispatcher()};
    var commandMap = new LotusMVW.CommandMap(context);

    it('check SpiRef.CommandMapper function', function () {

        commandMap.addCommand( 'testEvent1', LotusMVW.SampleCommand );
        commandMap.addCommand( 'testEvent2', LotusMVW.SampleCommand );

        expect( commandMap.eventFunctionMap['testEvent1'][0].handler ).toBe(LotusMVW.SampleCommand);
        expect( commandMap.eventFunctionMap['testEvent2'][0].handler ).toBe(LotusMVW.SampleCommand);

        commandMap.removeCommand( 'testEvent2', LotusMVW.SampleCommand );

        expect( commandMap.eventFunctionMap['testEvent2']).toBe(undefined);
        expect( commandMap.eventFunctionMap['testEvent1'][0].handler ).toBe(LotusMVW.SampleCommand);

        commandMap.removeCommand( 'testEvent1', LotusMVW.SampleCommand );
        expect( commandMap.eventFunctionMap['testEvent1']).toBe(undefined);

        commandMap.addCommand( 'testEvent1', LotusMVW.SampleCommand );
        commandMap.addCommand( 'testEvent2', LotusMVW.SampleCommand );
        commandMap.addCommand( 'testEvent1', LotusMVW.SampleCommand );
        commandMap.addCommand( 'testEvent2', LotusMVW.SampleCommand );

        expect( commandMap.eventFunctionMap['testEvent1'].length).toBe(1);
        expect( commandMap.eventFunctionMap['testEvent2'].length).toBe(1);

        commandMap.addCommand( 'testEvent1', LotusMVW.SampleCommand );
        commandMap.addCommand( 'testEvent2', LotusMVW.SampleCommand );
        commandMap.addCommand( 'testEvent1', LotusMVW.SampleCommand );
        commandMap.addCommand( 'testEvent2', LotusMVW.SampleCommand );

        expect( commandMap.eventFunctionMap['testEvent1'].length).toBe(1);
        expect( commandMap.eventFunctionMap['testEvent2'].length).toBe(1);

        commandMap.removeAllCommands();

    });

    it('Should dispatch an event and receive callback', function ( done ) {
        var responder = {
            execute:function(event){
                console.log('CommandMapTest responder execute called: ' + event.type);
                commandMap.removeCommand( 'testEvent1', responder);
                done()
            }
        };

        commandMap.addCommand( 'testEvent1', responder, 'execute' );
        commandMap.context.eventDispatcher.dispatch(new Lavender.AbstractEvent('testEvent1', {}));

    });

    it('Should dispatch an event and receive callback', function ( done ) {
        var responder = {
            execute:function(event){
                console.log('CommandMapTest responder execute called: ' + event.type);
                commandMap.removeCommand( 'testEvent2', responder);
                done()
            }
        };

        commandMap.addCommand( 'testEvent2', responder, 'execute' );
        commandMap.context.eventDispatcher.dispatch(new Lavender.AbstractEvent('testEvent2', {}));

    });

    it('Should remove all commands', function () {
        commandMap.removeAllCommands();

    });

});