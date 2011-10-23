Ext.define('logbook.view.main.CenterPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.centerPanel',
    id: 'centerPanel',
    layout: 'fit',
    bodyBorder: false,
    
    initComponent: function() {
        this.items = [
            {
                xtype: 'tabpanel',
                id: 'tabPanel',
                //bodyStyle: 'background: url(images/Home.png) center no-repeat;',
                items: [{
                    xtype: 'entriLogBookPanel',
                    closable: true
                }],
                autoScroll: true
            }
        ];
        
        this.callParent(arguments);
    },
    
    showForm: function(screenId) {
        // get tabPanel
        var tabs = Ext.getCmp('tabPanel');
        var form = Ext.getCmp(screenId);
        if (form) {
            tabs.setActiveTab(screenId);
        } else {
            tabs.add({
                xtype: screenId,
                closable: true
            }).show();
        }
    }
});
