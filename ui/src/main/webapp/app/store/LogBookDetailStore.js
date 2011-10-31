Ext.define('logbook.store.LogBookDetailStore', {
    extend: 'Ext.data.Store',
    model: 'logbook.model.LogBookDetailModel',
    autoLoad: true,
    pageSize: 50,
    
    proxy: {
        type: 'ajax',
        api: {
            // reading header again ??
            read: '/logbook/ui/json/entri/list'
            //read: 'dummy-data/entri.json'
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
