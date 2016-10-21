/* function: validate property of object is valid
 * object: object need to check
 * listProperty: list property of object which is required
 * callbackSuccess: will call when all property of object is valid
 * callbackFail: will call when have least one property of object is invalid
 */
var validatePropertyObject = function validatePropertyObject(object, listProperty, callback) {
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
            callback.success.call(null);
        }
        else {
            callback.error.call(null, {
                message: keyInvalid + " invalid!"
            });
        }
    }
    catch (ex) {
        console.log('validate property object: ' + ex.toString() + ' inline: ' + ex.stack);
        callback.error.call(null, {
            message: ex
        });
    }
};

module.exports = validatePropertyObject;
