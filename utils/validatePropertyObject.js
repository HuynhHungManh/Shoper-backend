/**
 * Created by PC on 10/26/2016.
 */
var validatePropertyObject = function validatePropertyObject(object, listProperty) {
    return new Promise(function(resolve, reject) {
        try {
            var isSuccess = true;
            var keyInvalid = '';
            listProperty.forEach(function(key) {
                if (object[key] === null || object[key] === undefined || object[key] === [] || object[key] === '') {
                    isSuccess = false;
                    keyInvalid = key;
                    return;
                }
            });
            if (isSuccess) {
                resolve();
            }
            else {
                reject(keyInvalid + " invalid!");
            }
        }
        catch (ex) {
            console.log('validate property object: ' + ex.toString() + ' inline: ' + ex.stack);
            reject(ex);
        }
    });
};

module.exports = validatePropertyObject;
