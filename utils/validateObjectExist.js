/**
 * Created by PC on 10/26/2016.
 */
var validateObjectExist = function validateObjectExist(schema, id) {
    return new Promise(function(resolve, reject) {
        try {
            schema.find({
                _id: id
            })
                .exec(function(err, docs) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        if (docs.length > 0) {
                            resolve();
                        }
                        else {
                            reject(schema.modelName + ' not fount!');
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