const StaffersController = require('../controllers/staffers.controller')
module.exports = function(app){
    app.get('/stafftest', StaffersController.test);
    app.get('/api/staffers', StaffersController.getAll);
    app.get('/api/staffers/:id', StaffersController.getOne);
    app.post('/api/staffers', StaffersController.createOne);    
    app.put('/api/staffers/:id', StaffersController.updateOne);
    app.delete('/api/staffers/:id', StaffersController.deleteOne);
}