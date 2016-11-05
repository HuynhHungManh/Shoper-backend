/**
 * Created by PC on 10/8/2016.
 */
exports.initProductRouter = function initProductRouter(app) {
    app.get('/product/fetch', require('./fetch'));
    app.post('/product/create', require('./create'));
    app.post('/product/update', require('./update'));
    app.get('/product/delete', require('./delete'));
};