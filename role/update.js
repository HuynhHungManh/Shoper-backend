/**
 * Created by PC on 10/8/2016.
 */
module.exports = function updateRoles(req, res) {

    var errorHandler = function (status, message) {
        res.status(status).json({
            message: message.toString()
        });
    };

    try {
        var Role = require('./role.object');
        var validatePropertyObject = require('../utils/validatePropertyObject');

        var createRole = function (role) {
            role.name = req.body.name;
            role.code = req.body.code;



            role.save(function (err, doc) {
                if (err) {

                    errorHandler(400, err);
                }
                else {

                    res.status(201).json(doc);
                }
            });
        }

        Role.findById(req.body._id, function (err, response) {
            Promise.all([validatePropertyObject.call(null, req.body, ['name'])])
                .then(createRole(response))
                .catch(function (err) {
                    errorHandler(err.status, err.message);
                });
        });
    }
    catch (ex) {
        console.log('update categories: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }
};