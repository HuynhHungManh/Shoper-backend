/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function fetchListUsers(req, res) {
    var User = require('./user.object');
    User.find({})
        .populate('role')
        .exec(function(err, docs) {
            if (err) {
                console.log(docs);
                res.status(400).json({
                    message: err
                });
            }
            else {
                res.status(200).json(docs);
            }
        });
};

