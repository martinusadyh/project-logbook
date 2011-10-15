Ext.define('logbook.view.utility.UserProfilePanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userProfilePanel',
    id: 'userProfilePanel',
    title: 'User Profile',
    bodyPadding: 5,
    autoScroll: true,
    
    initComponent: function() {
        this.tbar = {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    id: 'btnEditUser',
                    iconCls: 'icon-edit',
                    action: 'edit',
                    scope: this,
                    text: 'Edit'
                }, {
                    xtype: 'button',
                    id: 'btnSaveUser',
                    iconCls: 'icon-save',
                    action: 'save',
                    scope: this,
                    disabled: true,
                    text: 'Simpan'
                }
            ]
        };
        
        // The fields
        this.items = [{
            xtype: 'userProfileForm'
        }];
        
        this.callParent(arguments);
    }
});
