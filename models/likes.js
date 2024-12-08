const mongoose = require('mongoose');

const likeSchema = new mongoose.Sshema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    user:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("Like",likeSchema);