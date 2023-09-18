const CarsController = require('../controllers/cars.controller')
module.exports = function(app){
    app.get('/', CarsController.test);
    app.get('/api/notes', CarsController.getAll);
    app.get('/api/notes/:id', CarsController.getOne);
    app.post('/api/notes', CarsController.createOne);    
    app.put('/api/notes/:id', CarsController.updateOne);
    app.delete('/api/notes/:id', CarsController.deleteOne);
}