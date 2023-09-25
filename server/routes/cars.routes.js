const CarsController = require('../controllers/cars.controller')
module.exports = function(app){
    app.get('/cartest', CarsController.test);
    app.get('/api/cars', CarsController.getAll);
    app.get('/api/cars/:id', CarsController.getOne);
    app.post('/api/cars', CarsController.createOne);    
    app.put('/api/cars/:id', CarsController.updateOne);
    app.delete('/api/cars/:id', CarsController.deleteOne);
}