/**
 * Created by PC on 10/16/2016.
 */

var mongoose = require("mongoose");

var RoleSchema = mongoose.Schema({
    name: String,

});

module.exports = mongoose.model('Role', RoleSchema);
