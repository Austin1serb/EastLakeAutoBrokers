const mongoose = require('mongoose')
const CarsSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [2, "Name must be at least 2 characters long"]
    },
    conditionNew: {
        type: Boolean,
        default: true
    },
    year: {
        type: Number,
        minlength: [4, "Please provide a valid 4 digit year."], 
        maxlength: [4, "Please provide a valid 4 digit year."]
    },
    make: {
        type: String,
        minlength: [2, "Make must be at least 2 characters long"]
    },
    trim: {
        type: String,
        minlength: [2, "Trim must be at least 2 characters long"]
    },
    color: {
        type: String,
        minlength: [2, "Color must be at least 2 characters long"]
    },
    interior: {
        type: String,
        minlength: [2, "Interior must be at least 2 characters long"]
    },
    interiorColor: {
        type: String,
        minlength: [2, "Interior Color must be at least 2 characters long"]
    },
    bodyType: {
        type: String,
        minlength: [2, "Body Type must be at least 2 characters long"]
    },
    fuelType: {
        type: String,
        minlength: [2, "Fuel Type must be at least 2 characters long"]
    },
    cylinders: {
        type: String,
        minlength: [2, "Cylinder info must be at least 2 characters long"]
    },
    driveTrain: {
        type: String,
        minlength: [2, "Drive Train info must be at least 2 characters long"]
    },
    transmission: {
        type: String,
        minlength: [2, "Transmission type must be at least 2 characters long"]
    },
    vin: {
        type: Number,
        min: [0, "Number cannot be negative"], 
        required: [true, "VIN number is required"]
    },
    engine: {
        type: String,
        minlength: [2, "Engine info must be at least 2 characters long"]
    },
    mileage: {
        type: Number,
        min: [0, "Number cannot be negative."]
    },
    stockNumber: {
        type: Number,
        min: [0, "Number cannot be negative."]
    }

}, {timestamps: true})
const Cars = mongoose.model("Cars", CarsSchema)
module.exports = Cars;