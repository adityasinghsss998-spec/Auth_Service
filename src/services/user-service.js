const {UserRepository} = require('../repository/user-repository');
const {JWT_KEY}=require('../config/serverConfig')
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')
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
  async signIn(email,plainPassword){
     try{
      // step1-> fetch the user using the email
      const user= await this.userRepository.getbyemail(email);
      //staep2-> compare incoming palne password with the encrypted password
      const passwordmatch=this.checkPassword(plainPassword,user.password);
      if(!passwordmatch){
        console.log("password doesn't match");
        throw {error:"Incorrect password"};
      }
      //staep3= if password match then create a new token and send it to the user
      const newJWT=this.createToken({email:user.email,id:user.id});
      return newJWT
    }catch(e){
      console.log("Something went wrong in signing in the passsword");
      throw e
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
  
  checkPassword(userInputPlainPassword,encryptPassword){
      try{
      return bcrypt.compareSync(userInputPlainPassword,encryptPassword)
    }catch(e){
      console.log("Something went wrong at password comparison");
      throw(e);
     }
}
}

module.exports={
  UserService
}