//api CRUD

const Notas = require('../models/Notas');

//este es apra crear las notas
exports.crearNota = async (req, res) =>{
    try {
        //crea una nueva nota con los datos de ls oslicitus
        const nuevaNota = new Notas(req.body);
        //guarda la nota en la base de datos
        await nuevaNota.save();
        //devuelte la respuesta con la nota creada
        res.status(201).json(nuevaNota);

    } catch (error) {
        console.log(error);
        res.status(500).send('error mi locooo');
    }
}

//este es para leer las notas
exports.obtenerNotas = async (req, res) =>{
    try {
        const notas = await Notas.find();
        res.json(notas)
    } catch (error) {
        console.log(error);
        res.status(500).send('error mi loco');
    }
}

//este es para actualziar las notas
exports.actualizarNota = async(req, res) =>{
    try {
        const {nombre,curso,paralelo,materia,nota1,nota2,nota3,notaP,notaF}=req.body;
        let notas = await Notas.findById(req.params.id);

        if(!notas){
            res.status(404).json({msg:'nota no existe'})
        }

        notas.nombre = nombre;
        notas.curos = curso;
        notas.paralelo = paralelo;
        notas.materia = materia;
        notas.nota1 = nota1;
        notas.nota2 = nota2;
        notas.nota3 = nota3;
        notas.notaP = notaP;
        notas.notaF = notaF;

        notas = await Notas.findOneAndUpdate({_id: req.params.id},notas,{new:true})
        res.json(notas);
    } catch (error) {
        console.log(error);
        res.status(500).send('error mi loco ')
        
    }
}

//este es para obtener las notas
exports.obtenerNota = async(req, res) =>{
    try {
        let notas = await Notas.findById(req.params.id);

        if(!notas){
            res.status(404).json({msg:'nota no existe'})
        }
         res.json(notas);
    } catch (error) {
        console.log(error);
        res.status(500).send('error mi loco ')
        
    }
}

exports.eliminarNota = async(req, res) =>{
    try {
        let notas = await Notas.findById(req.params.id);

        if(!notas){
            res.status(404).json({msg:'nota no existe'})
        }

        await Notas.findOneAndDelete({_id: req.params.id})
         res.json({msg:'producto elimiando con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('error mi loco ')
        
    }
}