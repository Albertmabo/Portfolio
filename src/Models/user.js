import mongoose from "mongoose";
import validator from "validator";


const userModel = mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength:[23,"Name cannot be greater then 23"],
        minlenght:[3,"Name cannot be less then 3"],
        trim: true
    },
    email:{
        type:String,
        requied: true,
        maxlength:[20, "Email cannot be greater then 20"],
        minlength:[5, "Email cannot be less then 5"],
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a vlaid email.']
    },
    password: {
        type: String,
        require:[true, "Please enter a valid Password"],


    },
    confirmPassword: {

    },

})


export default mongoose.model('User', userModel);