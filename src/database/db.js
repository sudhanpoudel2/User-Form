import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/Student_Form')
.then(()=>{
    console.log("Mongo is connected");
})
.catch((error)=>{
    console.log('error',error);
})