const express=require('express');
const router=express.Router();
const Usercontroller=require('../../controllers/user-controllers');
const {validateUserAuth}=require('../../middlewares/index')
router.post('/signup',Usercontroller.create);
router.post('/signin',validateUserAuth,Usercontroller.SignIn);
router.get('/isAuthenticated',Usercontroller.isAuthenticated)
module.exports=router;