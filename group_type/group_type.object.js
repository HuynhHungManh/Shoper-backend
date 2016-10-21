/**
 * Created by PC on 10/16/2016.
 */
var group_type = function () {

    this.setGroup_type = function (code) {
        this.code = code;

    };

    this.getGroup_type = function () {
        return {
            code: this.code

        }
    };
};
module.exports = group_type;