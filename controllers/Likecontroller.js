const Post = require("../models/postModel");
const Like = require("../models/likeModel");

// like a post 
exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;

        // create like object
        const like = new Like({ post, user });
        
        // save the like object
        const savedLike = await like.save();

        // update the post collection
        const updatedPost = await Post.findByIdAndUpdate(
            post,
            { $push: { likes: savedLike._id } },
            { new: true }
        ).populate("likes").exec();

        res.json({
            post: updatedPost,
        });
    } catch (err) {
        return res.status(400).json({
            error: "Error while liking the post",
        });
    }
};

// dislike controller

exports.unlikepost=async (req,res)=>{
    try{
     
        const {post,like}=req.body;

        // Find and Delete from like db
        const deletedLike=await  Like.findOneAndDelete({post:post,_id:like});

// update the post collection  by deleteing the like using id 

const updatedpost=await Post.findByIdAndUpdate(post,{$pull :{likes:deletedLike._id}},{new:true});

res.json({
    post:updatedpost,
})

    }
    catch(err){
        return res.status(400).json({
            error: "Error while unliking the post",
    }
)}
}
