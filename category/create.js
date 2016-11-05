/**
 * Created by PC on 10/8/2016.
 */
'use strict';
'use strict';
module.exports = function createCategorys(req, res) {
    var Category = require('./category.object');

    var category = new Category({
        name: req.body.name,
        code: req.body.code
    });
    category.save(
        function(err, doc) {
            if (err) {
                res.status(400).json({
                    message: err
                })
            }
            else
                res.status(201).json({message: "successed"});
        });
};
