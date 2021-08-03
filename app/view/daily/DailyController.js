/**
 * Daily controller
 */
Ext.define('AirEnv.view.daily.DailyController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.airenv-daily',

    onShow() {
        this.getViewModel().loadDaily(new Date());
    },

    onPrevDay() {
        this.getViewModel().prevDay();
    },

    onNextDay() {
        this.getViewModel().nextDay();
    }

});
