Ext.define('logbook.store.CategoryStore', {
    extend: 'Ext.data.Store',
    model: 'logbook.model.CategoryModel',
    autoLoad: true,
    pageSize: 10,
    
    proxy: {
        type: 'ajax',
        api: {
            read: '/logbook/ui/json/default/category/list'
            //read: 'dummy-data/category.json'
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
