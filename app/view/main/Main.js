/**
 * Main View
 */
Ext.define('AirEnv.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype : 'app-main',

    requires: [
        'Ext.layout.Fit',
        'AirEnv.view.latest.Latest',
    ],

    controller: 'main',
    viewModel : 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title  : 'Latest',
            iconCls: 'x-fa fa-clock',
            xtype  : 'airenv-latest'
        }, {
            title  : 'Daily',
            iconCls: 'x-fa fa-chart-line',
            xtype  : 'airenv-daily'
        }
    ]
});
