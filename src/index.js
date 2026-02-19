const express=require('express');
const {PORT} =require('./config/serverConfig');
const bodyparser=require('body-parser')
const app=express();
const Apiroutes=require('./routes/index')
const {User}=require('./models/index');
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
// const {UserRepository}=require('./repository/user-repository')
const {UserService}=require('./services/user-service');
const prepareAndStartServer = ()=> {
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({extended:true}));
   app.use('/api',Apiroutes)
  app.listen(PORT,async()=> { 
    console.log("server started on port",PORT);
    //  const incomingpass="123456789";
    //  const user= await User.findByPk(4);
    // const response=bcrypt.compareSync(incomingpass,user.password);
    //  console.log(response);
    // const repo=new UserRepository()
    // const user=await repo.getByID(3);
    // console.log(user)
     const userservice=new UserService();
  //   const newtoken=userservice.createToken({email:"sanket@admin123.com",id:1});
  // // //  const newtoken = jwt.sign({ email: 'user@email.com' }, 'secret', { expiresIn: '1h' });
  //   console.log("new token is ",newtoken);
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbjEyMy5jb20iLCJpZCI6MSwiaWF0IjoxNzcxNDg3MDQ2LCJleHAiOjE3NzE0OTA2NDZ9.PDHH3N2JUPLbLvr0MjAeZqGkcmNcb6xTfQF1nBHnNhY";
  const response=userservice.verifyToken(token);
  console.log(response)

  })
}

prepareAndStartServer();