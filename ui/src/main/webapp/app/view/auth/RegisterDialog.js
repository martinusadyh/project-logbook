Ext.define('logbook.view.auth.RegisterDialog', {
    extend: 'Ext.window.Window',
    alias: 'widget.registerDialog',
    id: 'registerDialog',
    title: 'Register New User',
    layout: 'fit',
    width: 470,
    height: 240,
    autoShow: true,
    modal: true,
    
    initComponent: function() {
        this.items = [{
            xtype: 'userProfileForm'
        }];
        
        this.buttons = [{
            text: 'OK',
            action: 'register_new_user'
        }, {
            text: 'Cancel',
            scope: this,
            handler: this.close
        }];
        
        this.callParent(arguments);
    }
});
