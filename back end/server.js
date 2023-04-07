
require("dotenv").config();

const express=require("express")
const app=express()
const Routes=require("./routes/workouts")
// mongoos
const mongoos =require("mongoose")
// middlware
app.use(express.json())
app.use((req,res,next)=>{


    console.log(req.method,req.path);
    next()
})


// routes

app.use("/api/workouts/",Routes)

// connect to db 

mongoos.connect(process.env.MONG_URI)
.then(()=>{
    // listen

    app.listen(process.env.PORT,()=>{
        console.log("listen 4000 and connect the db");
    })
})
.catch((error)=>{
    console.log(error);
})