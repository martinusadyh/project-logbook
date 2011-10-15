Ext.define('logbook.view.utility.form.UserProfileForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userProfileForm',
    id: 'userProfileForm',
    bodyPadding: 5,
    width: 450,
    border: false,
    
    fieldDefaults: {
        msgTarget: 'side',  // configuration for validation error msg.
        labelAlign: 'left',
        labelWidth: 120
    },
    
    initComponent: function() {
        // The fields
        this.items = [
            {
                xtype: 'hiddenfield',
                name: 'id',
                id: 'id'
            }, {
                xtype: 'datefield',
                name: 'createdDate',
                format: 'd/m/Y H:i:s',
                hidden: true,
                id: 'createdDate'
            }, {
                xtype: 'datefield',
                name: 'lastUpdateDate',
                format: 'd/m/Y H:i:s',
                hidden: true,
                id: 'lastUpdateDate'
            }, {
                xtype: 'textfield',
                fieldLabel: 'Username <font color="red">*</font>',
                name: 'userName',
                id: 'userName',
                anchor: '100%',
                disabled: true,
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Password <font color="red">*</font>',
                inputType: 'password',
                name: 'password',
                id: 'password',
                anchor: '100%',
                disabled: true,
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'First Name <font color="red">*</font>',
                name: 'firstName',
                id: 'firstName',
                anchor: '100%',
                disabled: true,
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Last Name <font color="red">*</font>',
                name: 'lastName',
                id: 'lastName',
                anchor: '100%',
                disabled: true,
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Email Address <font color="red">*</font>',
                vtype: 'email',
                name: 'emailAddress',
                id: 'emailAddress',
                anchor: '100%',
                disabled: true,
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Email Password <font color="red">*</font>',
                inputType: 'password',
                name: 'passwordEmail',
                id: 'passwordEmail',
                anchor: '100%',
                disabled: true,
                allowBlank: false
            }
        ];
        
        this.callParent(arguments);
    },
    
    enableDisableComponent: function(widgetId, isEnable) {
        if (isEnable) {
            Ext.getCmp(widgetId).enable(true);
        } else {
            Ext.getCmp(widgetId).disable(true);
        }
    },
    
    enableDisableForm: function(isEnable) {
        if (isEnable) {
            this.enableDisableComponent('userName', true);
            this.enableDisableComponent('password', true);
            this.enableDisableComponent('firstName', true);
            this.enableDisableComponent('lastName', true);
            this.enableDisableComponent('emailAddress', true);
            this.enableDisableComponent('passwordEmail', true);
        } else {
            this.enableDisableComponent('userName', false);
            this.enableDisableComponent('password', false);
            this.enableDisableComponent('firstName', false);
            this.enableDisableComponent('lastName', false);
            this.enableDisableComponent('emailAddress', false);
            this.enableDisableComponent('passwordEmail', false);
        }
    }
});
