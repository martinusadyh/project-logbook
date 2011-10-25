Ext.define('logbook.controller.entri.EntriLogBookController', {
    extend: 'Ext.app.Controller',
    stores: [
        'LogBookStore',
        'UserProfileStore',
        'CategoryStore',
        'ModuleStore'
    ],
    models: [
        'LogBookModel',
        'UserProfileModel',
        'CategoryModel',
        'ModuleModel'
    ],
    views: [
        'entri.EntriLogBookPanel',
        'entri.MainLogBookPanel',
        'entri.form.TableLogBook',
        'entri.form.DetailLogBookForm',
        'entri.form.TableDetailLogBook'
    ],
    
    init: function() {
        this.control({
            'entriLogBookPanel button[action=save_detail_logbook]': {
                click: this.save_detail_logbook
            }, 
            'entriLogBookPanel button[action=delete_detail_logbook]': {
                click: this.delete_detail_logbook
            }, 
            'entriLogBookPanel button[action=send_email]': {
                click: this.send_email
            }
        });
    },
    save_detail_logbook: function() {
        sysdate = Ext.getCmp('systemDate').getValue();
        Ext.getCmp('sysDate').setValue(sysdate);
        
        // cek this form is valid 
        if (Ext.getCmp('detailLogBookForm').getForm().isValid()) {
            // TODO: We need use store for all CRUD operation.
            Ext.getCmp('detailLogBookForm').getForm().submit({
                waitMsg : 'Inserting new record ...',
                method  : 'POST',
                url     : '/logbook/ui/json/entri/save',
                scope   : this,
                success : function(form, action) {
                    this.submitFormResult(form, action);
                }, 
                failure : function(form, action) {
                    this.submitFormResult(form, action);
                }
            });
        } else {
            Ext.MessageBox.alert('Errors', 
                'Kolom bertanda (<font color="red">*</font>) harus diisi !!');
        }
    }, 
    delete_detail_logbook: function() {
        console.log('delete_detail_logbook clicked');
    },
    send_email: function() {
        console.log('send email clicked');
    },
    submitFormResult: function(form, action) {
        if (action.result.success) {
            console.log('save success');
        } else {
            Ext.Msg.show({
                title:'Error',
                msg: action.result.msg,
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        }
    }
});
