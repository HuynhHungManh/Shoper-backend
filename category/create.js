/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createCategorys(req, res) {


    var product = require('./category.object');
    var myCategory = new category();
    myCategory.setCategory(req.body.code, req.body.name);

    GLOBAL.db.collection('category').insertOne(
        myCategory.getCategory(),
        function (err, doc) {
            if (err) {
                res.status(400).json({message: err})
            }
            else
                res.status(201).json(doc.ops[0]);

        }
    );
};