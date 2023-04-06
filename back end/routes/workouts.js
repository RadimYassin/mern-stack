const express =require("express")



// router
const router = express.Router();

// Get all workouts


router.get("/",(req,res)=>{
    res.json({msg:"get all workouts"})
})

// get single workout

router.get("/:id",(req,res)=>{
    res.json({msg:"get single workouts"})
})
// post new workout


router.post("/",(req,res)=>{
    res.json({msg:"post new workout"})
})
// delete a workout 
router.delete("/:id",(req,res)=>{
    res.json({msg:"delele  workout"})
})
// updat a workout 
router.patch("/:id",(req,res)=>{
    res.json({msg:"update  workout"})
})
module.exports=router



