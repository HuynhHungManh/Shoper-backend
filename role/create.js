/**
 * Created by PC on 10/8/2016.
 */
'use strict';
module.exports = function createRoles(req, res) {


    var role = require('./role.object');
    var myRole = new role({
        name: req.body.name,
    });
    myRole.save(
        function (err, doc) {
            if (err) {
                res.status(400).json({
                    message: err
                })
            }
            else
                res.status(201).json({message: "successed"});
        });
};




