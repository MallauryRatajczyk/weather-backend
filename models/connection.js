const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://mallauryratajczyk:ilTUExVpw99oCN4n@cluster0.gi6g6.mongodb.net/weather';


mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
