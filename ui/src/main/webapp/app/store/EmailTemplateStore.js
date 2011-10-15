Ext.define('logbook.store.EmailTemplateStore', {
    extend: 'Ext.data.Store',
    model: 'logbook.model.EmailTemplateStore',
    autoLoad: true,
    pageSize: 50,
    
    proxy: {
        type: 'ajax',
        api: {
            read: '/logbook/logbook/json/utility/emailtemplate/findtemplate'
        },
        
        reader: {
            type: 'json',
            root: 'items',
            totalProperty: 'totalCount',
            successProperty: 'success'
        },
        
        listeners: {
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
});
