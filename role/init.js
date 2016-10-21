/**
 * Created by PC on 10/8/2016.
 */
exports.initRoleRouter = function initRoleRouter(app) {
    app.get('/role/fetch', require('./fetch'));
    app.post('/role/create', require('./create'));
    app.post('/role/update', require('./update'));
    app.get('/role/delete/:id', require('./delete'));
};