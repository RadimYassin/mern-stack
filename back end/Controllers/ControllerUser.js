const User = require("../models/UserM")
const JWT=require("jsonwebtoken")
// function for JWT

const CreateToken=(_id)=>{
   
   return JWT.sign({_id},process.env.SECRET,{expiresIn:"3d"})

}

//login user

const loginUser= async(req,res)=>{
   const {email,password}=req.body


   try {
      const user=await User.login(email,password)

      const token= CreateToken(user._id)

      res.status(200).json({email,token})
   } catch (error) {
      res.status(400).json({error:error.message})
   }

}


// signup user


const signupUser= async(req,res)=>{

     const {email,password}=req.body

     try {
        const user=await User.signup(email,password)

        // create tokon
        const token = CreateToken(user._id)
        res.status(200).json({email,token})
        
     } catch (error) {
        res.status(400).json({msg:error.message})
     }

}

module.exports={loginUser,signupUser}
