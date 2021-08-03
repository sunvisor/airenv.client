/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'AirEnv.Application',

    name: 'AirEnv',

    requires: [
        // This will automatically load all classes in the AirEnv namespace
        // so that application classes do not need to require each other.
        'AirEnv.*'
    ],

    // The name of the initial view to create.
    mainView: 'AirEnv.view.main.Main'
});
