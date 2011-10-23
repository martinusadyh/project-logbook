Ext.define('logbook.view.utility.EmailTemplatePanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.emailTemplatePanel',
    id: 'emailTemplatePanel',
    title: 'Email Template',
    bodyPadding: 5,
    autoScroll: true,
    
    initComponent: function() {
        this.tbar = {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    id: 'btnEditEmail',
                    iconCls: 'icon-edit',
                    action: 'edit',
                    scope: this,
                    text: 'Edit'
                }, {
                    xtype: 'button',
                    id: 'btnSaveEmail',
                    iconCls: 'icon-save',
                    action: 'save',
                    scope: this,
                    disabled: true,
                    text: 'Simpan'
                }, {
                    xtype: 'button',
                    id: 'btnCancelEmail',
                    iconCls: 'icon-cancel',
                    action: 'cancel',
                    scope: this,
                    text: 'Cancel'
                } 
            ]
        };
        
        // The fields
        this.items = [{
            xtype: 'emailTemplateForm'
        }];
        
        this.callParent(arguments);
    },
    
    disableEnableButton: function(buttonId, disableStatus) {
        if (disableStatus) {
            Ext.getCmp(buttonId).disable(true);
        } else {
            Ext.getCmp(buttonId).enable(true);
        }
    },
    
    btnEditOnClick: function() {
        this.disableEnableButton('btnEditEmail', true);
        this.disableEnableButton('btnSaveEmail', false);
    },
    
    btnSaveOnClick: function() {
        this.disableEnableButton('btnEditEmail', false);
        this.disableEnableButton('btnSaveEmail', true);
    }
});
