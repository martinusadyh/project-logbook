Ext.define('logbook.store.LogBookStore', {
    extend: 'Ext.data.Store',
    model: 'logbook.model.LogBookModel',
    autoLoad: true,
    pageSize: 50,
    
    proxy: {
        type: 'ajax',
        api: {
            read: '/logbook/ui/json/entri/list'
        },
        
        reader: {
            type: 'json',
            root: 'items',
            totalProperty: 'totalCount',
            successProperty: 'success'
        },
        
        listeners: {
            exception: function(proxy, response, operation) {
                console.log("getError() -> " + operation.getError());
                console.log("statusText -> " + response.statusText);
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
