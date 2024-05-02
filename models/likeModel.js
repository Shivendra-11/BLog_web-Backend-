const mongoose=require("mongoose");

// route handler
const LikeSchema = new mongoose.Schema({   
   
      post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",//reference to the Post model..
        required: true  
      },
      user:{
        type:String,
        required:true
      },
      
 });

//  export
module.exports=mongoose.model("Like",LikeSchema); //export the model Like   