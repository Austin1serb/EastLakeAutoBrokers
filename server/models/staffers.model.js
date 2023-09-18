const mongoose = require('mongoose')
const StaffersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters long"]
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters long"]
    },
    position: {
        type: String,
        required: [true, "Position is required"],
        minlength: [2, "Position must be at least 2 characters long"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please provide a phone number"],
        match: [/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, "Please provide a valid phone number"]
    },
    email: {
        type: String,
        required: [true, 'Please provide email address'],
        match: [/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, "Please provide a valid email address."]
    },
    bio: {
        type: String,
        maxlength: [256, "Please keep your description to under 256 characters."]
    }
}, {timestamps: true})
const Staffers = mongoose.model("Staffers", StaffersSchema)
module.exports = Staffers;