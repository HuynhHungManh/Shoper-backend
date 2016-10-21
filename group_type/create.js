/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createGroups_type(req, res) {


    var group_type = require('./group_type.object');
    var myGroup_type = new Group_type();
    myGroup.setGroup_type(req.body.code);

    GLOBAL.db.collection('group_type').insertOne(
        myGroup_type.getGroups_type(),
        function (err, doc) {
            if (err) {
                res.status(400).json({message: err})
            }
            else
                res.status(201).json(doc.ops[0]);

        }
    );
};