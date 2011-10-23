Ext.define('logbook.view.entri.EntriLogBookPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.entriLogBookPanel',
    id: 'entriLogBookPanel',
    title: 'Entri LogBook',
    layout: 'border',
    bodyPadding: 5,
    autoScroll: true,
    
    initComponent: function() {
        this.items = [{
            xtype: 'tableLogBook',
            split: true,
            width: '30%',
            region: 'west'
        }, {
            xtype: 'mainLogBookPanel',
            region: 'center'
        }];
        
        this.callParent(arguments);
    }
});
