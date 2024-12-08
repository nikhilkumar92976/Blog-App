const Post = require('../models/post');
const Like = require('../models/like');

exports.createLikes = async(req,res)=>{
    try{
        const {post,user} = req.body;
        const like = await Like.findOne({post,user});

        const savedLikes = await like.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savedLikes._id}},{new:true})

        res.json({
            post:updatedPost
        })
    }
    catch(err){
        return res.status(500).json({
            error:"liked is not created !"
        })
    }
}

exports.deleteLikes = async(req,res)=>{
    try{
        const {post,like} = req.body;
        const deleteLike = await Like.findOneAndDelete({post:post,_id:like});

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true});

        res.json({
            post:updatedPost
        })
    }
    catch(err){
        return res.status(500).json({
            error:"unliked is not created !"
        })
    }
}