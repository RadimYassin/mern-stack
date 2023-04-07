
const { default: mongoose } = require("mongoose");
const Workout=require("../models/WorkoutM");

// get all workout


const getAllworkout=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})
     res.status(200).json(workouts)
}  


// get single workout

const getworkout=async(req,res)=>{
      const {id}=req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({msg:"msg error"})
      }
      const workout = await Workout.findById(id)
      if (!workout) {
           return res.status(404).json({msg:"msg error"})
      }
      res.status(200).json(workout)

}

// post new workout

const createworkout=async(req,res)=>{
    const {title,load,reps}=req.body;
    
    try {
        const workout= await Workout.create({title,load,reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error:"error "})
    }

}

//delete a workout


const deleleWorkout=async(req,res)=>{
   const {id}=req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({"msg":"item mkynch fe db"})
    }
    const workout = await Workout.findOneAndDelete({_id:id})

    if(!workout){
        return res.status(404).json({"msg":"item mkynch fe db"})
    }
    res.status(200).json(workout)

}


//updat a workout 

const updateWorkout=async(req,res)=>{
const {id}=req.params

if (!mongoose.Types.ObjectId.isValid(id)) {
    return  res.status(404).json({"msg":"item mkynch"})
}
  
const workout =  await Workout.findByIdAndUpdate({_id:id},{
    ...req.body
})

res.status(200).json(workout)


}


module.exports={
    getAllworkout,
    getworkout,
    createworkout,
    deleleWorkout,
    updateWorkout

}