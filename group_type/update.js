/**
 * Created by PC on 10/8/2016.
 */
module.exports = function updateGroups_type(req, res) {

    var errorHandler = function (status, message) {
        res.status(status).json({
            message: message.toString()
        });
    };

    try {
        var Group_type = require('../group_type/group_type.object');

        var validatePropertyObject = require('../utils/validatePropertyObject');


        var createGroup_type = function (group_type) {

            group_type.code = req.body.code;

            group_type.save(function (err, doc) {
                if (err) {
                    errorHandler(400, err);
                }
                else {
                    res.status(201).json(doc);
                }
            });
        };
        Group_type.findById(req.body._id, function (err, response) {
            Promise.all([
                validatePropertyObject.call(null, req.body, ['code'])])
                .then(createGroup_type.bind(null, response))
                .catch(function (err) {
                    errorHandler(err.status, err.message);
                });
        });
    }
    catch (ex) {
        console.log('create group_type: ' + ex.toString() + ' inline: ' + ex.stack);
        errorHandler(500, ex);
    }


};