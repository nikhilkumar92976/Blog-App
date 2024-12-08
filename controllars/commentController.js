const Post = require('../models/post');
const Comment = require('../models/comments');

exports.createComment = async (req,res)=>{
    try{
        const {post,user,body} = req.body; // find comment data 

        const newComment = new Comment({post,user,body}); // create a object in comment

        const savedComment = await newComment.save();// save the comment object in our database

        // update the post with the new comment id  and fetch the updated post with comments
        const updatePost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
                            .populate('comments')
                            .exec();
        
        res.json({
            post:updatePost
        })
    }
    catch(err){
        return res.status(500).json({
            error:"comment is not created !"
        })
    }
}