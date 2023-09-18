const CarsController = require('../controllers/cars.controller')
const StaffersController = require('../controllers/staffers.controller')
module.exports = function(app){
    app.get('/cartest', CarsController.test);
    app.get('/api/cars', CarsController.getAll);
    app.get('/api/cars/:id', CarsController.getOne);
    app.post('/api/cars', CarsController.createOne);    
    app.put('/api/cars/:id', CarsController.updateOne);
    app.delete('/api/cars/:id', CarsController.deleteOne);
    
    app.get('/stafftest', StaffersController.test);
    app.get('/api/staffers', StaffersController.getAll);
    app.get('/api/staffers/:id', StaffersController.getOne);
    app.post('/api/staffers', StaffersController.createOne);    
    app.put('/api/staffers/:id', StaffersController.updateOne);
    app.delete('/api/staffers/:id', StaffersController.deleteOne);
}