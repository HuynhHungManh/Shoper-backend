/* function: validate object is exist in db
 * table: table where object storage
 * id: id of object
 * res: response of request API
 * callback: callback which run when succes
 */
var validateObjectExist = function validateObjectExist(table, id, res, callback) {
    var ObjectId = require("mongodb").ObjectId;
    var errorHandlers = require("../utils/errorHandlers");

    try {
        GLOBAL.db.collection(table).find({
            _id: ObjectId(id)
        }).toArray(function(err, docs) {
            if (err) {
                callbackError({
                    message: err
                });
            }
            else {
                if (docs.length > 0) {
                    callback.success.call(null);
                }
                else {
                    callbackError({
                        message: table + ' not fount!'
                    });
                }
            }
        });
    }
    catch (ex) {
        console.log('validate object message: ' + ex.toString() + ' inline: ' + ex.stack);
        callbackError({
            message: ex
        });
    }

    var callbackError = function(message) {
        if (callback.error) {
            callback.error.call(null, message);
        }
        else {
            errorHandlers(res, 400, message);
        }
    };
};

module.exports = validateObjectExist;
