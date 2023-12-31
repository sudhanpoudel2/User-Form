import mongoose,{Schema} from "mongoose";

const userSchema = new Schema(
    {
        firstName :{
            type: String,
            require : true
        },
        lastName :{
            type : String,
            require : true
        },
        email :{
            type : String,
            require : true
        },
        contact :{
            type:Number,
            require : true
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'other'],
            require : true
        },
        subject:{
            type : String,
            enum : ['english','maths','physics'],
            require : true
        },
        uploadResume: {
            type: Date,
            default: Date.now
        }



},
    {timestamps:true}
    );

    export const UserModel = mongoose.model("User",userSchema);