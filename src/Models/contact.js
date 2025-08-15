const mongoose = require("mongoose");
const validator = require("validator");

const contactMeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "Please provide first name"],
        trim: true,
        maxlength: [20, "First name cannot be greater than 20 characters"],
        minlength: [3, "First name cannot be less than 3 characters"]
    },
    last_name: {
        type: String,
        required: [true, "Please provide last name"],
        trim: true,
        maxlength: [20, "Last name cannot be greater than 20 characters"],
        minlength: [3, "Last name cannot be less than 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Please enter an email."],
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, "Please enter a valid email."]
    },
    subject: {
        type: String,
        required: [true, "Please provide subject"],
        trim: true,
        maxlength: [20, "Subject cannot be greater than 20 characters"],
        minlength: [3, "Subject cannot be less than 3 characters"]
    },
    message: {
        type: String,
        required: [true, "Please provide message"],
        trim: true,
        maxlength: [50, "Message cannot be greater than 50 characters"],
        minlength: [3, "Message cannot be less than 3 characters"]
    }
}, { timestamps: true });

module.exports = mongoose.model("Contact", contactMeSchema);
