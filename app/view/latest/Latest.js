/**
 * Latest view
 */
Ext.define('AirEnv.view.latest.Latest',{
    extend: 'Ext.panel.Panel',

    requires: [
        'AirEnv.view.latest.LatestController',
        'AirEnv.view.latest.LatestModel',
    ],

    xtype: 'airenv-latest',
    controller: 'airenv-latest',
    viewModel: {
        type: 'airenv-latest'
    },

    layout: 'center',

    items: [
        {
            xtype: 'component',
            tpl: [
                '<div class="latest-container">',
                '  <div class="latest-header">',
                '  </div>',
                '  <div class="latest-outer latest-{color}">',
                '    <div class="latest-inner">',
                '      <div class="latest-value">',
                '        {value}',
                '      </div>',
                '      <div class="latest-date">',
                '        {date}',
                '      </div>',
                '    </div>',
                '  </div>',
                '</div>',
            ],
            bind: {
                data: '{latest}'
            },
        },
        {
            xtype: 'button',
            iconCls: 'x-fa fa-sync',
            handler: 'onRefreshButton'
        }
    ],

    listeners: {
        show: 'onShow'
    }

});
