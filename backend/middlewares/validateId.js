const mongoose = require("mongoose");
exports.validateId = (req,res,next)=>{
    const {id} = req.params;

    const result = mongoose.Types.ObjectId.isValid(id);

    if(!result)
    return res.json({message:"Invalid Mongo Id"});

    next();
}