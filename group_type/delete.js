/**
 * Created by PC on 10/8/2016.
 */
module.exports = function deleteGroups_type(req, res) {
    GLOBAL.db.collection('group_type').deleteOne(
        {id: (req.param.id)},
        function (err, doc) {
            if (err)
                res.status(400).json({message: err});
            else
                res.status(201).json({message: "delete success"})
        }
    )
};


