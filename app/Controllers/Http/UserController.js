'use strict'
const User = use('App/Models/User');


class UserController {
  
     async login({request,auth,response}){
         const data = request.only(['email','password']);
         const token = await auth.attempt(data.email,data.password);

         return response.ok(token);
     }



   async store({request,response}){
       const data = request.only(['username','email','password']);
        console.log(data.username);
          const user = await User.create(data);
       
           return this.login(...arguments);
    }
}

module.exports = UserController
