/**
 * Daily model
 */
Ext.define('AirEnv.view.daily.DailyModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.airenv-daily',

    apiUrl: 'http://192.168.0.231/list/co2/home_office/{0}/{1}',

    data: {
        today: null
    },

    formulas: {
        day: function (get) {
            const day = get('today');
            return Ext.Date.format(day, 'Y-m-d');
        }
    },

    stores: {
        dailyStore: {
            fields: [
                {name: 'date', type: 'date', dateFormat: 'Y-m-d H:i:s'},
                {name: 'value', type: 'number'}
            ],
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json'
                }
            }
        }
    },

    async loadDaily(day) {
        const from = Ext.Date.format(day, 'Y-m-dT00:00:00'),
              to = Ext.Date.format(day, 'Y-m-dT23:59:59'),
              url = Ext.String.format(this.apiUrl, from, to),
              result = await fetch(url),
              data = await result.json(),
              store = this.getStore('dailyStore');

        this.set('today', day);
        store.loadData(data);
    },

    async nextDay() {
        const newDay = Ext.Date.add(this.get('today'), Ext.Date.DAY, 1);

        await this.loadDaily(newDay);
    },

    async prevDay() {
        const newDay = Ext.Date.add(this.get('today'), Ext.Date.DAY, -1);

        await this.loadDaily(newDay);
    }

});
