Ext.define('logbook.store.UserProfileStore', {
    extend: 'Ext.data.Store',
    model: 'logbook.model.UserProfileModel',
    autoLoad: true,
    pageSize: 50,
    
    proxy: {
        type: 'ajax',
        api: {
            //create: '/logbook/ui/json/utility/userprofile/save',
            read: '/logbook/ui/json/utility/userprofile/list'
            //create: 'dummy-data/save-data.json',
            //read: 'dummy-data/user.json'
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
                    msg: response,//operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    }
});
