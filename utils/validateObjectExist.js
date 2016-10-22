/* function: validate object is exist in db
 * table: table where object storage
 * id: id of object
 * res: response of request API
 * callback: callback which run when succes
 */
var validateObjectExist = function validateObjectExist(table, id) {
    var ObjectId = require("mongodb").ObjectId;
    return new Promise(function(resolve, reject) {
        try {
            GLOBAL.db.collection(table).find({
                    _id: ObjectId(id)
                })
                .toArray(function(err, docs) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        if (docs.length > 0) {
                            resolve();
                        }
                        else {
                            reject(table + ' not fount!');
                        }
                    }
                });
        }
        catch (ex) {
            console.log('validate object message: ' + ex.toString() + ' inline: ' + ex.stack);
            reject(ex);
        }
    });
};

module.exports = validateObjectExist;
