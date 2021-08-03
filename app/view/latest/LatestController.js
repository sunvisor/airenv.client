/**
 * Latest view controller
 */
Ext.define('AirEnv.view.latest.LatestController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.airenv-latest',

    onShow() {
        this.getViewModel().loadLatest()
    },

    onRefreshButton() {
        this.getViewModel().loadLatest()
    },

});
