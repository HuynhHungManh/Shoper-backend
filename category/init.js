/**
 * Created by PC on 10/8/2016.
 */
exports.initCategoryRouter = function initCategoryRouter(app) {
    app.get('/category/fetch', require('./fetch'));
    app.post('/category/create', require('./create'));
    app.post('/category/update', require('./update'));
    app.get('/category/delete', require('./delete'));
};