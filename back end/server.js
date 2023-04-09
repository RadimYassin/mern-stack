
require("dotenv").config();

const express=require("express")
const app=express()
const Routes=require("./routes/workouts")
const cors = require('cors');

// mongoos
const mongoos =require("mongoose")
// middlware


// middlware for link (backend to front end )
const allowedOrigins = [process.env.PORTFRONT];
app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `The CORS policy for this site does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
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