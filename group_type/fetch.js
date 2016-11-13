/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function fetchListGroups_type(req, res) {


    var Group_type = require('../group_type/group_type.object');

    Group_type.find(function(err, docs) {
        if (err) {
            res.status(400).json({
                message: err
            });
        }
        else {
            res.status(200).json({ "data" : docs});
        }
    });
};