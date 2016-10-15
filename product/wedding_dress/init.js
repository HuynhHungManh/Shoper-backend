/**
 * Created by PC on 10/8/2016.
 */
exports.initBestWeddingDress = function initBestWeddingDress(app) {
    app.get('/product/wedding_dress/fetch', require('./fetch')());
    app.post('/product/wedding_dress/create', require('./create')());
    app.post('/product/wedding_dress/update', require('./update')());
    app.get('/product/wedding_dress/delete', require('./delete')());
};