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
            }
        });
    },
    save_detail_logbook: function() {
        console.log('save_detail_logbook clicked');
    }, 
    delete_detail_logbook: function() {
        console.log('delete_detail_logbook clicked');
    }
});
