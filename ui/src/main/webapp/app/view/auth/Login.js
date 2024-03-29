Ext.define('logbook.view.auth.Login', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginForm',
    id: 'loginForm',
    frame: true, 
    height: 130,
    width: 300,
    plain: true,
    bodyPadding: 5,
    
    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 120
    },
    
    initComponent: function() {
        // The fields
        this.items = [
            {
                xtype:'box',
                anchor:'100%',
            }, {
                xtype: 'textfield',
                fieldLabel: 'Username <font color="red">*</font>',
                name: 'j_username',
                id: 'j_username',
                allowBlank: 'false'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Password <font color="red">*</font>',
                inputType: 'password',
                name: 'j_password',
                id: 'j_password'
            }
        ];
        
        this.buttons = [
            {
                text: 'Register',
                action: 'register'
            }, {
                text: 'Login',
                action: 'login'
            }, {
                text: 'Cancel',
                action: 'cancel'
            }
        ];
        
        this.callParent(arguments);
    }
});
