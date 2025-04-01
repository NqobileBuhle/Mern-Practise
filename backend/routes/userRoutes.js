import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authUser,registerUser,logoutUser,getUserProfile,updateUserProfile } from "../controllers/userController.js";

const router=express.Router();
router.post('/',registerUser);
router.post('/auth',authUser);
router.post('/logout',logoutUser);
router.get('/profile',protect,getUserProfile);
router.put('/profile',protect,updateUserProfile);
//router.route('/profile).get(getUserProfile).put(updateUserprofile);

export default router;