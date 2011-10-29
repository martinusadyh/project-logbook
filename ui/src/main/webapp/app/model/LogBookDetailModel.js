Ext.define('logbook.model.LogBookDetailModel', {
    extend: 'Ext.data.Model',
    fields: ['id', 'createdDate', 'lastUpdateDate', 'timeReport', 'userName', 'fromUser', 'problem', 'suspect', 'solution', 'timeSolved', 'solvedBy', 'categoryName', 'moduleName'],
    
    belongsTo : 'logbook.model.LogBookModel'
});
