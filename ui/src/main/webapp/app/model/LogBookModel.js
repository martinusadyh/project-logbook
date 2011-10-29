Ext.define('logbook.model.LogBookModel', {
    extend: 'Ext.data.Model',
    fields: ['id', 'createdDate', 'lastUpdateDate', 'logDate', 'totalLaporan'],
    
    hasMany: [
        {model: 'logbook.model.LogBookDetailModel', name: 'logBookDetails'}
    ]
});
