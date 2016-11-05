/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createGroups_type(req, res) {

    var group_type = require('./group_type.object');
    var myGroup_type = new group_type({
        code: req.body.code,
    });

    myGroup_type.save(
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
