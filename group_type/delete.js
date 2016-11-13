/**
 * Created by PC on 10/8/2016.
 */
module.exports = function deleteGroups_type(req, res) {

    var group_type = require('./group_type.object');

    group_type.remove({
            _id: req.query.id
        },
        function(err, doc) {
            if (err)
                res.status(400).json({
                    message: err
                });
            else
                res.status(200).json({
                    message: "delete success"
                })
        });
};


