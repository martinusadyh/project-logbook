Ext.define('logbook.model.UserProfileModel', {
    extend: 'Ext.data.Model',
    fields: ['id', 'createdDate', 'lastUpdateDate', 'userName', 'firstName', 'lastName', 'emailAddress', 'password']
});
