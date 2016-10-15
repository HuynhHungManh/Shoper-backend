/**
 * Created by PC on 10/8/2016.
 */
exports.initBestSellRouter = function initBestSellRouter(app) {
    app.get('/product/best_sell/fetch', require('./fetch')());
    app.post('/product/best_sell/create', require('./create')());
    app.post('/product/best_sell/update', require('./update')());
    app.get('/product/best_sell/delete', require('./delete')());
};