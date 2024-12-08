//import mongoose
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    post:{ // kis post pe comment kiya
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'  // post model ke reference karega
    },
    user:{// kis user ne comment kiya
        type:String,
        required:true
    },
    body:{// kay comment kiya
        type:String,
        required:true
    }
});
module.exports = mongoose.model("Comment",commentSchema);