const {UserRepository} = require('../repository/user-repository');
const {JWT_KEY}=require('../config/serverConfig')
const jwt = require('jsonwebtoken');
class UserService{
  constructor(){
    this.userRepository=new UserRepository()
  }

  async create(data){
     try{
        const user=await this.userRepository.create(data);
        return user
     } catch(e){
      console.log("Something went wrong at the service layer");
      throw(e);
     }
  }
  createToken(user){
    try{
      const result=jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
      return result;
    }catch(e){
      console.log("Something went wrong at the token creation");
      throw(e);
     }
  }
  verifyToken(token){
     try{
      const result=jwt.verify(token,JWT_KEY);
        return result
    }catch(e){
      console.log("Something went wrong at the token validation");
      throw(e);
     }
  }
}
module.exports={
  UserService
}