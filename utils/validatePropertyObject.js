var validatePropertyObject = function validatePropertyObject(object, listProperty) {
    return new Promise(function (resolve, reject) {
        try {
            var isSuccess = true;
            var keyInvalid = '';
            listProperty.forEach(function (key) {
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
                reject({
                    status: 400,
                    message: keyInvalid + " invalid!"
                });
            }
        }
        catch (ex) {
            console.log('validate property object: ' + ex.toString() + ' inline: ' + ex.stack);
            reject({
                status: 500,
                message: ex
            });
        }
    });
};
module.exports = validatePropertyObject;
