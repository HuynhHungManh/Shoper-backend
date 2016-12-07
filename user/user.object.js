/**
 * Created by PC on 10/16/2016.
 */
var mongoose = require("mongoose");
var UserSchema = mongoose.Schema({
    username: String,
    password: String,
    islock : Boolean,
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }
});
module.exports = mongoose.model('User', UserSchema);


