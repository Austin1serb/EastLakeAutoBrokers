const ClientsController = require('../controllers/clients.controller')
module.exports = function(app){
    app.get('/clienttest', ClientsController.test);
    app.get('/api/clients', ClientsController.getAll);
    app.get('/api/clients/:id', ClientsController.getOne);
    app.post('/api/clients', ClientsController.createOne);    
    app.put('/api/clients/:id', ClientsController.updateOne);
    app.delete('/api/clients/:id', ClientsController.deleteOne);
}