import asyncHandler from "express-async-handler";


//login user
const authUser= asyncHandler(async(req,res)=>{

    res.status(200).json({message:'login user'});
});

//register user
const registerUser= asyncHandler(async(req,res)=>{

    res.status(200).json({message:'Register user'});
});
//logout user
const logoutUser= asyncHandler(async(req,res)=>{

    res.status(200).json({message:'User logged out '});
});
//get user profile
const getUserProfile= asyncHandler(async(req,res)=>{

    res.status(200).json({message:' user Profile'});
});
//update user profile
const updateUserProfile= asyncHandler(async(req,res)=>{

    res.status(200).json({message:'update user profile'});
});

export {authUser,registerUser,logoutUser,getUserProfile,updateUserProfile};