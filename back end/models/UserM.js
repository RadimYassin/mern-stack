const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");
const Validator=require('validator');

const Schema=mongoose.Schema;
 
const UserSchema= new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
    ,
    password:{
        type:String,
        required:true
    }
})

/// statics sign up 
UserSchema.statics.signup=async function (email,password){


    // validation 


    if(!email || !password){
        throw Error("ALL fields must be filled")
    }

    // check error for email
    if(!Validator.isEmail(email)){
        throw  Error(`$email is not valid` )
    }

    // chech password if strong or not 

    if(!Validator.isStrongPassword(password)){
        throw  Error(`password  not strong enough` )
    }

const exsist=await this.findOne({email})


if(exsist){
    throw  Error("Email already  exsist in bd")
}


// use bcrypt 

const salt =await bcrypt.genSalt(10)
const hash =await bcrypt.hash(password,salt)

const user=await this.create({email:email,password:hash})

return user
}


// statics login

UserSchema.statics.login=async function (email,password) {
    // validation
    if(!email || !password){
        throw Error("ALL fields must be filled")
    }
    const  user =await this.findOne({email})

    if (!user) {
        throw Error("incorrect email")
    }
   const corectPassword= await bcrypt.compare(password,user.password)


   if (!corectPassword) {
    throw Error("incorrect password")
   }
    
   return user
    
}
module.exports = mongoose.model("User",UserSchema)