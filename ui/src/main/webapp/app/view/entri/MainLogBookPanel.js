Ext.define('logbook.view.entri.MainLogBookPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainLogBookPanel',
    id: 'mainLogBookPanel',
    title: 'Add/Modify LogBook',
    layout: 'border',
    bodyPadding: 5,
    autoScroll: true,
    
    initComponent: function() {
        this.items = [{
            xtype: 'detailLogBookForm',
            split: true,
            region: 'center'
        }, {
            xtype: 'tableDetailLogBook',
            height: '42%',
            region: 'south'
        }];
        
        this.callParent(arguments);
    }
});
