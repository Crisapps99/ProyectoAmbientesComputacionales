const mongoose = require('mongoose');
//conecxion ala base de datos
require('dotenv').config({path:'variables.env'});

const conectarDB =async() =>{
    try {
        await mongoose.connect(process.env.DB_MONGO);
            console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        process.exit(1)// con este se detiene la app
    }
}
module.exports = conectarDB