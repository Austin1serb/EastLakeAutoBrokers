const Cars = require('../models/cars.model')
module.exports = {
    test : (req, res) => {
        res.json({message: "Test response!"});
    },
    getAll: (req, res) => {
        Notes.find()
            .then(data=>{res.json(data)})
            .catch(err=>res.json(err))
    },
    getOne: (req, res) => {
        Notes.findOne({_id: req.params.id})
            .then(data=>{
                res.json(data)
            }).catch(err=>res.json(err))
    },
    createOne: (req, res) => {
        Notes.create(req.body)
            .then(data => {
                res.json(data)
            }).catch(err=>res.status(400).json(err))
    },
    updateOne: (req, res) => {
        Notes.findOneAndUpdate(
                {_id: req.params.id}, 
                req.body,
                {new: true, runValidators: true} )
            .then(data=>{
                res.json(data)
            }).catch(err=>res.status(400).json(err))
    },
    deleteOne: (req, res) => {
        Notes.deleteOne({_id: req.params.id})
            .then(data=>{
                res.json(data)
            }).catch(err=>res.json(err))
    }
}