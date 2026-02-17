const {UserRepository} = require('../repository/user-repository');
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
}
module.exports={
  UserService
}