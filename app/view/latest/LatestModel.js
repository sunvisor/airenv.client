/**
 * Latest view model
 */
Ext.define('AirEnv.view.latest.LatestModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.airenv-latest',

    data: {
        latest: '0'
    },

    apiUrl: 'http://192.168.0.231/latest/co2/home_office',

    async loadLatest() {
        const result = await fetch(this.apiUrl)
        const data = await result.json()
        this.set('latest', data);
    }

});
