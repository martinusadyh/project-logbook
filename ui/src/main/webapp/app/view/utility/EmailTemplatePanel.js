Ext.define('logbook.view.utility.EmailTemplatePanel', {
    extend: 'Ext.form.Panel',
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
                }
            ]
        };
        
        // The fields
        this.items = [{
            xtype: 'emailTemplateForm'
        }];
        
        this.callParent(arguments);
    }
});
