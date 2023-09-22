const mongoose = require('mongoose')
const CarsSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [2, "Name must be at least 2 characters long"]
    },
    imgSource: {
        type: String,
        required : [true, "Please provide the address for the image"]
    },
    description: {
        conditionNew: {
            type: Boolean,
            default: false
        },
        mileage: {
            type: Number,
            min: [0, "Number cannot be negative."]
        },
        model: {
            type: String,
            minlength: [2, "Model must be at least 2 characterss long"]
        },
        bodyType: {
            type: String,
            minlength: [2, "Body Type must be at least 2 characters long"]
        },
        exterior: {
            type: String,
            minlength: [2, "Exterior must be at least 2 characters long"]
        },
        interior: {
            type: String,
            minlength: [2, "Interior must be at least 2 characters long"]
        },
        doors: {
            type: Number,
            min: [2, "Vehicle must have at least 2 doors."]
        },
        stock: {
            type: String,
            minlength: [2, "Stock must be at least 2 characters long"]
        },
        vin: {
            type: String,
            required: [true, "VIN number is required"],
            minlength: [17, "VIN number must be 17-characters"],
            maxlength: [17, "VIN number must be 17-characters"], 
            match: [/\b[(A-H|J-N|P|R-Z|0-9)]{17}\b/gm, "Please provide a valid VIN number"]
        },
        engine: {
            type: String,
            minlength: [2, "Engine info must be at least 2 characters long"]
        },
        transmission: {
            type: String,
            minlength: [2, "Transmission type must be at least 2 characters long"]
        },
        fuelType: {
            type: String,
            minlength: [2, "Fuel Type must be at least 2 characters long"]
        },
        driveTrain: {
            type: String,
            minlength: [2, "Drive Train info must be at least 2 characters long"]
        }
    },
    details: {
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
        interiorColor: {
            type: String,
            minlength: [2, "Interior Color must be at least 2 characters long"]
        },
        cylinders: {
            type: Number,
            min: [1, "Cylinder count must be greater than 1"]
        },
        fuelEconomy: {
            type: String,
        }
    }

}, {timestamps: true})
const Cars = mongoose.model("Cars", CarsSchema)
module.exports = Cars;