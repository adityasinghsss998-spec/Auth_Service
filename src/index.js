const express=require('express');
const {PORT} =require('./config/serverConfig');
const bodyparser=require('body-parser')
const app=express();
const Apiroutes=require('./routes/index')
const {User}=require('./models/index');
const bcrypt=require('bcrypt')
// const {UserRepository}=require('./repository/user-repository')
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
  })
}

prepareAndStartServer();