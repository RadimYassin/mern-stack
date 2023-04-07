const express =require("express")

const {
    getAllworkout,
    getworkout,
    createworkout,
    deleleWorkout,
    updateWorkout
}=require("../Controllers/Controller")

// router
const router = express.Router();

// Get all workouts


router.get("/",getAllworkout)

// get single workout

router.get("/:id",getworkout)

// post new workout


router.post("/",createworkout)
// delete a workout 
router.delete("/:id",deleleWorkout)
// updat a workout 
router.patch("/:id",updateWorkout)
module.exports=router



