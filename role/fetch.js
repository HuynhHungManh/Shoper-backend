/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function fetchListRoles(req, res) {

    var Role = require('./role.object');
    Role.find(function(err, docs) {
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

