const express = require('express');
const router = express.Router();

// Import Controller 
const {createComment} = require("../controllers/Commentcontroller");
const {createPost} = require("../controllers/Postcontroller");  
const {getAllPosts}=require("../controllers/Postcontroller");   
const {likePost,unlikepost}=require("../controllers/Likecontroller");



router.post("/comments/create",createComment);
router.post("/posts/create",createPost);    
router.get("/posts",getAllPosts); 
router.post("/Likes/like",likePost)  
router.post("/Likes/unlike",unlikepost);

// Export Controller
module.exports = router;