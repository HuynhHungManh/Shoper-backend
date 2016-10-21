/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createGroups(req, res) {


    var group = require('./group.object');
    var myGroup = new group();
    myGroup.setGroup(req.body.group_type_id,req.body.product_id );

    GLOBAL.db.collection('group').insertOne(
        myGroup.getGroup(),
        function (err, doc) {
            if (err) {
                res.status(400).json({message: err})
            }
            else
                res.status(201).json(doc.ops[0]);

        }
    );
};