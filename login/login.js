/**
 * Created by PC on 11/25/2016.
 */
module.exports = function login(req, res) {
    var User = require('../user/user.object');
    var Role = require('../role/role.object');


    User.find({
        username: req.body.username,
        password: req.body.password
    })
        .populate('role')
        .exec(function (err, docs) {
            if (err) {
                res.status(400).json({
                    message: err
                });
            }
            else {
                if (docs.length > 0) {
                    res.status(200).json({"data": docs});
                }
                else {
                    res.status(400).json({
                        message: "Invalid username or password"
                    });
                }
            }
        });
};
