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
const SignIn=async(req,res)=>{
   try{
    console.log(req.body)
       const response=await userService.signIn(req.body.email,req.body.password);
       return res.status(201).json({
        message:"Successfully signed in",
        success:true,
        data:response,
        err:{}, 
       })
     } catch(e){
      console.log(e);
       return res.status(500).json({
        message:"Something went wrong in signing in",
        data:{},
        err:e
       })
     }
}
const isAuthenticated=async(req,res)=>{
     try{
     const token=req.headers['x-access-token'];
     const response=await userService.IsAuthenticated(token)
     return res.status(200).json({
      success:true,
      data:response,
      error:{},
      message:"user is authenticsted and the token is valid"
     })
       
     } catch(e){
      console.log(e);
       return res.status(500).json({
        message:"user is not authenticated",
        data:{},
        err:e
       })
     }
}
module.exports={
  create,
  SignIn,
  isAuthenticated,
}