Ext.define('logbook.view.main.DashboardPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.dashboardPanel',
    layout: 'border',
    border: false,
    autoScroll: true,
    
    initComponent: function() {
        this.items = [{
            xtype: 'toolBarPanel',
            region: 'north'
        }, {
            xtype: 'centerPanel',
            region: 'center'
        }, {
            xtype: 'bottomPanel',
            region: 'south'
        }];
        
        this.callParent(arguments);
    }
});
