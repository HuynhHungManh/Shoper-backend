/**
 * Created by PC on 11/25/2016.
 */
module.exports = function login(req, res) {
    var User = require('../user/user.object');
    var Role = require('../role/role.object');
    var jwt = require('jwt-simple');
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
                    var token = jwt.encode(docs[0], 'Shoper');
                    res.status(200).json({"user": docs[0], token: 'JWT ' + token, "data": docs[0]});
                }
                else {
                    res.status(400).json({
                        message: "Invalid username or password"
                    });
                }
            }
        });
};
