Ext.define('logbook.view.utility.form.UserProfileForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userProfileForm',
    id: 'userProfileForm',
    title: 'Registered User',
    bodyPadding: 5,
    width: 450,
    
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
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Password <font color="red">*</font>',
                inputType: 'password',
                name: 'password',
                id: 'password',
                anchor: '100%',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'First Name <font color="red">*</font>',
                name: 'firstName',
                id: 'firstName',
                anchor: '100%',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Last Name <font color="red">*</font>',
                name: 'lastName',
                id: 'lastName',
                anchor: '100%',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Email Address <font color="red">*</font>',
                vtype: 'email',
                name: 'emailAddress',
                id: 'emailAddress',
                anchor: '100%',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: 'Email Password <font color="red">*</font>',
                inputType: 'password',
                name: 'passwordEmail',
                id: 'passwordEmail',
                anchor: '100%',
                allowBlank: false
            }
        ];
        
        this.buttons = [{
            text: 'Cancel',
            action: 'cancel_user_profile',
        }, {
            text: 'Save',
            action: 'save_user_profile'
        }];
        
        this.callParent(arguments);
    }
});
