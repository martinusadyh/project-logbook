Ext.define('logbook.view.main.AccordionPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.accordionPanel',
    layout: 'accordion',
    
    initComponent: function() {
        this.items = [{
            xtype: 'panel',
            title: 'Master'
        }, {
            xtype: 'panel',
            title: 'Transaction'
        }, {
            xtype: 'panel',
            region: 'User Profile'
        }];
        
        this.callParent(arguments);
    }
});
