const mongoose = require('mongoose')
const ClientsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters long"]
    },
    email: {
        type: String,
        required: [true, 'Please provide email address'],
        match: [/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, "Please provide a valid email address."]
    },
    mobilePhone: {
        type: String,
        required: [true, "Please provide a phone number"],
        match: [/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, "Please use this format: +1 (123) 123-4567"]
    },
    homePhone: {
        type: String,
        required: [true, "Please provide a phone number"],
        match: [/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, "Please use this format: +1 (123) 123-4567"]
    },
    comment: {
        type: String,
        maxlength: [256, "Please keep your description to under 256 characters."]
    },
    consent: {
        type: Boolean,
        required: [true, "Please Acknowledge and Consent."]
    }
}, {timestamps: true})
const Clients = mongoose.model("Clients", ClientsSchema)
module.exports = Clients;