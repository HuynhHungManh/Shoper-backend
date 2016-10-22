/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createUsers(req, res) {


    var user = require('./user.object');
    var myUser = new user();
    myUser.setUser(req.body.username, req.body.password,  req.body.role_id);

    GLOBAL.db.collection('user').insertOne(myUser.getUser(),
        function (err, doc) {
            if (err) {
                res.status(400).json({message: err})
            }
            else
                res.status(201).json(doc.ops[0]);
        }
    );
};