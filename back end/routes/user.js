const express =require("express")
// router
const router = express.Router();
const {loginUser,signupUser} =require("../Controllers/ControllerUser")
//login

router.post("/login",loginUser)

//singup

router.post("/singup",signupUser)


module.exports=router