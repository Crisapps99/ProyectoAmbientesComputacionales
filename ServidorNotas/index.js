const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
//creamos el servidor
const app = express();

//conectamos al abase de datos
conectarDB();
app.use(cors());
//para procesar lso da tos json 
app.use(express.json());

app.use('/api/nota',require('./routes/notas'));



app.listen(4000,()=>{
    console.log('el servidor est acorriendo bien ')
})