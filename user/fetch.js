/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function fetchListUsers(req, res) {


    GLOBAL.db.collection('user').find({}).toArray(function (err, docs) {
        if (err) {
            res.status(400).json({message: err});
        }
        else {
            res.status(200).json(docs);
        }
    });
};