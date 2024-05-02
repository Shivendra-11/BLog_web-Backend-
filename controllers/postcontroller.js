const Post=require("../models/postModel");
exports.createPost=async(req,res)=>{

try{
         
// extract data from request body
    const {title,body}=req.body;
    // create post object
    const post=new Post({title,body});
    // save the new post object into the db
    const savedPost=await post.save();
// save the post 
    res.json({
        post:savedPost,
    });
}
 
// fetch the error

catch(err){
    return res.status(500).json({
        error:"Error while creating post",
    })
    }
}


exports.getAllPosts=async(req,res)=>{
    try{

         const posts=await Post.find().populate("comments").exec();

         res.json({
            posts,
         })



    }
    catch(err){
        return res.status(500).json({
            error:"Error while fetching posts",
        })

    }
}