const mongoose = require('mongoose')
const CarsSchema = new mongoose.Schema({
    name: {
        
    },
    condition: {

    },
    year: {

    },
    make: {

    },
    trim: {

    },
    color: {

    },
    interior: {

    },
    interiorColor: {

    },
    bodyType: {

    },
    fuelType: {

    },
    cylinders: {

    },
    driveTrain: {

    },
    transmission: {

    },
    vin: {

    },

}, {timestamps: true})
const Cars = mongoose.model("Cars", CarsSchema)
module.exports = Cars;