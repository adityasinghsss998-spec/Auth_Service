
const {UserService}=require('../services/user-service');
const userService=new UserService();
const create = async(req,res)=>{
     try{
       const response=await userService.create({
        email:req.body.email,
        password:req.body.password,
       })
       return res.status(201).json({
        message:"Successfully created a new user",
        success:true,
        data:response,
        err:{},
       })
     } catch(e){
      console.log(e);
       return res.status(500).json({
        message:"Something went wrong ",
        data:{},
        err:e
       })
     }
}
module.exports={
  create,
}