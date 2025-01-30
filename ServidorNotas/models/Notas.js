const mongoose = require('mongoose');

const NotaSchema =  new mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    curso:{
        type: String,
        required:true
    },
    paralelo:{
        type: String,
        required:true
    },
    materia:{
        type: String,
        required:true
    },
    nota1:{
        type: String,
        required:true
    },
    nota2:{
        type: String,
        required:true
    },
    nota3:{
        type: String,
        require:true
    },
    notaP:{
        type: String,
        required:true
    },
    notaF:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Notas',NotaSchema);