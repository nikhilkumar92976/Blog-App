const Post = require('../models/post');

exports.createPost = async (req,res)=>{
    try {
        const {title,body} = req.body;
        const newPost = new Post({title, body});

        const savedPost = await newPost.save();
        res.json({
            post: savedPost,
        })
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

exports.getAllPosts = async (req,res)=>{
    try{
        const post = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}