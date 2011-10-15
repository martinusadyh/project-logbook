Ext.define('logbook.view.main.BottomPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.bottomPanel',
    layout: 'fit',
    height: 25,
    bodyBorder: false,
    plain: true,
    
    initComponent: function() {
        this.tbar = {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'tbfill'
                }, {
                    xtype: 'tbtext',
                    id: 'bottomPanelUsername',
                    text: 'Parlindungan'
                }, {
                    xtype: 'tbseparator'
                }, {
                    xtype: 'tbtext',
                    id: 'bottomPanelRole',
                    text: 'Administrator Penyelenggara'
                }, {
                    xtype: 'tbseparator'
                }, {
                    xtype: 'tbtext',
                    id: 'bottomPanelSystemDate',
                    text: '20-10-2011'
                }
            ]
        };
        
        this.callParent(arguments);
    }
});
