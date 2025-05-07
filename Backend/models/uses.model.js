import mongoose from "mongoose";

const usesSchema = new mongoose.Schema({
    firstname : {
        type:String,
        require:true
    },
    lastname : {
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true['email is required'],
        uniq:true
    },
    password:{
        type:String,
        require:true,
        select: false
    },
    courses: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Book'
    }
},{timestamps:true})


const User = mongoose.model('User',usesSchema)
export default User