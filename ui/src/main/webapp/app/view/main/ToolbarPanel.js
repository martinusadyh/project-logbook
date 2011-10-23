Ext.define('logbook.view.main.ToolbarPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.toolBarPanel',
    id: 'toolBarPanel',
    layout: 'fit',
    height: 25,
    
    /* Semua action untuk menu disini di handle oleh 
     * app/controller/main/DashboardController.js */
    initComponent: function() {
        this.tbar = {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    text: 'File',
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                xtype: 'menuitem',
                                text: 'Logout',
                                action: 'logout'
                            }
                        ]
                    }
                }, {
                    xtype: 'button',
                    text: 'Entri LogBook',
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                xtype: 'menuitem',
                                text: 'Entri LogBook',
                                scope: this,
                                action: 'entri_logbook'
                            }
                        ]
                    }
                }, {
                    xtype: 'button',
                    text: 'Utility',
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                xtype: 'menuitem',
                                text: 'User Profile',
                                scope: this,
                                action: 'user_profile'
                            }, {
                                xtype: 'menuitem',
                                text: 'Email Template',
                                scope: this,
                                action: 'email_template'
                            }
                        ]   
                    }
                }
            ]
        };
        
        this.callParent(arguments);
    }
});
