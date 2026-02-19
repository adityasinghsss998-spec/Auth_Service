const express=require('express');
const router=express.Router();
const Usercontroller=require('../../controllers/user-controllers');
const {AuthRequestValidator}=require('../../middlewares/index')
router.post('/signup',AuthRequestValidator.validateUserAuth,Usercontroller.create);
router.post('/signin',AuthRequestValidator.validateUserAuth,Usercontroller.SignIn)
module.exports=router;