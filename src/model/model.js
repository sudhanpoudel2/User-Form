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



},
    {timestamps:true}
    );

    export const UserModel = mongoose.model("User",userSchema);