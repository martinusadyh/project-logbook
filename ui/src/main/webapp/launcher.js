Ext.application({
    name: 'logbook',
    appFolder: 'app',
    
    controllers: [
        'main.DashboardController',
        'entri.EntriLogBookController',
        'utility.EmailTemplateController',
        'utility.UserProfileController'
    ],
    
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [{
                xtype: 'dashboardPanel'
            }]
        });
        this.call_ajax();
    },
    call_ajax: function() {
        Ext.Ajax.request({
            url: '/logbook/ui/json/utility/userprofile/current-username',
            method: 'GET',
            success: function(result, request) {
                var text = Ext.JSON.decode(result.responseText);
                console.log('response ' + text.userName + ' ' + text.currentDate);
                Ext.getCmp('bottomPanelUsername').setText(text.userName);
                Ext.getCmp('bottomPanelSystemDate').setText(text.currentDate);
            }
        });
    }
});
