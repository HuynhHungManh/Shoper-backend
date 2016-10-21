/**
 * Created by PC on 10/16/2016.
 */
var category = function () {

    this.setCategory = function (code, name) {
        this.code = code;
        this.name = name;

    };

    this.getCategory = function () {
        return {
            code: this.code,
            name: this.name

        }
    };
};
module.exports = category;