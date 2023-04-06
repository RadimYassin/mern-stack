
require("dotenv").config();

const express=require("express")
const app=express()
const Routes=require("./routes/workouts")
// middlware
app.use(express.json())
app.use((req,res,next)=>{


    console.log(req.method,req.path);
    next()
})


// routes

app.use("/api/workouts/",Routes)



// listen

app.listen(process.env.PORT,()=>{
    console.log("listen 4000");
})