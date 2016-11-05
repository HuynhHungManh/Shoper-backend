/**
 * Created by PC on 10/8/2016.
 */
exports.initGroup_typeRouter = function initGroup_typeRouter(app) {
    app.get('/group_type/fetch', require('./fetch'));
    app.post('/group_type/create', require('./create'));
    app.post('/group_type/update', require('./update'));
    app.get('/group_type/delete', require('./delete'));
};