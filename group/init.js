/**
 * Created by PC on 10/8/2016.
 */
exports.initGroupRouter = function initGroupRouter(app) {
    app.get('/group/fetch', require('./fetch'));
    app.post('/group/create', require('./create'));
    app.post('/group/update', require('./update'));
    app.get('/group/delete', require('./delete'));
};