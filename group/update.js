/**
 * Created by PC on 10/8/2016.
 */
module.exports  = function updateGroups(req, res) {
    var updateDoc = req.body;
    delete updateDoc._id;

    GLOBAL.db.collection('group').updateOne(
        {id: (req.param.id)}, {
            $set: updateDoc,
            $currentDate: {"lastModified": true}
        },
        function (err, doc) {
            if (err)
                res.status(400).json({message: err});
            else
                res.status(201).json({message: "delete success"})
        }
    )
};