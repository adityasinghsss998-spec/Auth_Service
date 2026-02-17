const express=require('express');
const router=express.Router();
const Usercontroller=require('../../controllers/user-controllers');
router.post('/signup',Usercontroller.create);
module.exports=router;