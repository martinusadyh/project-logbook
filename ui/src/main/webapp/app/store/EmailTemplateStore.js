Ext.define('logbook.store.EmailTemplateStore', {
    extend: 'Ext.data.Store',
    model: 'logbook.model.EmailTemplateModel',
    autoLoad: true,
    pageSize: 50,
    
    proxy: {
        type: 'ajax',
        api: {
            //save: '/logbook/ui/json/utility/emailtemplate/save',
            read: '/logbook/ui/json/utility/emailtemplate/findtemplate'
        },
        
        reader: {
            type: 'json',
            root: 'items',
            totalProperty: 'totalCount',
            successProperty: 'success'
        },
        
        listeners: {
            exception: function(proxy, response, operation){
                console.log("getError() -> " + operation.getError());
                console.log("statusText -> " + response.statusText);
                console.log("response -> " + response);
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: response,//operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
});
