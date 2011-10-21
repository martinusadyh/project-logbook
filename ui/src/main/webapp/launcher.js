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
    }
});
