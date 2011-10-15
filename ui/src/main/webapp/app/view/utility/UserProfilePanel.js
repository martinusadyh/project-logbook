Ext.define('logbook.view.utility.UserProfilePanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.userProfilePanel',
    id: 'userProfilePanel',
    title: 'User Profile',
    bodyPadding: 5,
    autoScroll: true,
    
    initComponent: function() {
        // The fields
        this.items = [{
            xtype: 'userProfileForm'
        }];
        
        this.callParent(arguments);
    }
});
