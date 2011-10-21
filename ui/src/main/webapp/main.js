Ext.application({
    name: 'logbook',
    appFolder: 'app',
    
    controllers: [
        'auth.LoginController'
    ],
    
    launch: function() {
        Ext.QuickTips.init();
        
        Ext.create('Ext.window.Window', {
            title: 'Login Form',
            closable: false,
            resizable: false,
            plain: true,
            border: false,
            
            items: [{
                xtype: 'loginForm'
            }]
        }).show();
    }
});
