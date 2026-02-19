const express=require('express');
const router=express.Router();
const Usercontroller=require('../../controllers/user-controllers');
router.post('/signup',Usercontroller.create);
router.post('/signin',Usercontroller.SignIn)
module.exports=router;