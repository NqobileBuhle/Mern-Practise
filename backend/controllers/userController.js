import asyncHandler from "express-async-handler";
import generateToken from "../Utils/generateToken.js";
import User from "../models/userModel.js";




//register user
const registerUser= asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body;
    const userExist=await User.findOne({email});

    if (userExist){
        res.status(400);
        throw new Error('User already exist');
    }
    const user=await User.create({
        name,
        email,
        password
    });
    if (user){
        generateToken(res,user._id);
        res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email
    });

    }else{
        res.status(400);
        throw new Error('Invalid user data');
    }

});
//login user
const authUser= asyncHandler(async(req,res)=>{
    const{email,password}=req.body;
    const user=await User.findOne({email});

    
    if (user && (await user.matchPassword(password))){
        generateToken(res,user._id);
        res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email
    });

    }else{
        res.status(401);
        throw new Error('Invalid email or password');
    }
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