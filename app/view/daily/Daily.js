/**
 * Daily view
 */
Ext.define('AirEnv.view.daily.Daily', {
    extend: 'Ext.panel.Panel',

    requires: [
        'AirEnv.view.daily.DailyController',
        'AirEnv.view.daily.DailyModel',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Time',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line',
        'Ext.grid.Grid',
        'Ext.grid.column.Date',
    ],

    xtype     : 'airenv-daily',
    controller: 'airenv-daily',
    viewModel : {
        type: 'airenv-daily'
    },

    layout: {
        type : 'vbox',
        align: 'stretch'
    },

    items: [
        {
            docked: 'top'    ,
            xtype: 'titlebar',
            bind: {
                title: '{day}',
            },
            titleAlign: 'center',
            items: [
                {
                    iconCls: 'x-fa fa-caret-left',
                    handler: 'onPrevDay',
                },
                {
                    iconCls: 'x-fa fa-caret-right',
                    align: 'right',
                    handler: 'onNextDay',
                },
            ]
        },
        {
            xtype       : 'cartesian',
            title: 'test',
            flex: 1,
            insetPadding: 10,
            bind: {
                store: '{dailyStore}'
            },
            axes        : [{
                type    : 'numeric',
                position: 'left',
                fields  : ['value'],
                grid    : true,
                minimum : 0
            }, {
                type    : 'time',
                position: 'bottom',
                fields  : ['date'],
                dateFormat: 'H:i',
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series      : [{
                type  : 'line',
                style : {
                    stroke   : '#30BDA7',
                    lineWidth: 2
                },
                xField: 'date',
                yField: 'value',
            }]
        },
        {
            xtype  : 'grid',
            flex   : 1,
            bind   : {
                store: '{dailyStore}'
            },
            columns: [
                {
                    xtype    : 'datecolumn',
                    flex     : 1,
                    maxWidth : 300,
                    text     : 'Time',
                    dataIndex: 'date',
                    format   : 'H:i:s'
                },
                {
                    text     : 'CO2',
                    align    : 'right',
                    dataIndex: 'value'
                }
            ]
        },
    ],

    listeners: {
        show: 'onShow'
    }
});
