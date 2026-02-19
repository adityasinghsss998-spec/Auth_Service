const { where } = require('sequelize');
const {User}=require('../models/index')
class UserRepository{
    async create(data){
      try{
          const user=await User.create(data);
          return user
      } catch(e){
        console.log("Something went wrong at the repository layer");
        throw(e);
      }
    }
     async destroy(userId){
      try{
          await User.destroy({
            where:{
              id:userId
            }
          })
          return true;
      } catch(e){
        console.log("Something went wrong at the repository layer");
        throw(e);
      }
    }
    async getByID(userId){
       try{
          const user=await User.findByPk(userId,{
            attributes : ['email','id'],
          });
          return user
      } catch(e){
        console.log("Something went wrong at the repository layer");
        throw(e);
      }
    }
    async getbyemail(userEmail){
      try{
        const user=await User.findOne({
          where:{
            email:userEmail
          }
        })
        return  user
      } catch(e){
         console.log("Something went wrong at the repository layer");
        throw(e);
      }
    }
}

module.exports={
  UserRepository,
}