require('dotenv').config();
require('./config/mongoose.config'); 

const cors = require('cors')
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(cors(),express.json(),express.urlencoded({ extended: true }));

require('./routes/cars.routes')(app);
require('./routes/staffers.routes')(app);
require('./routes/clients.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );