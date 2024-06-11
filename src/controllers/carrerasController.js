const fs = require('fs');
const path = require('path');
const { crearCarreraSchema } = require('../middleware/validarSchemas');

const dataFilePath = path.join(__dirname, '../data/data.json');

const leerCarreras = () => {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data).carreras;
}

const guardarCarreras = (carreras) => {
    const data = fs.readFileSync(dataFilePath);
    const dataObj = JSON.parse(data);
    dataObj.carreras = carreras;
    fs.writeFileSync(dataFilePath, JSON.stringify(dataObj, null, 2));
}

const obtenerTodas = (req, res) => {
    const carreras = leerCarreras();
    res.json(carreras);
}

const obtenerPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const carreras = leerCarreras();
    const carrera = carreras.find(carrera => carrera.id === id);
    if (!carrera) {
        return res.status(404).json({ error: 'Carrera no encontrada' });
    }
    res.json(carrera);
}

const crear = (req, res) => {
    const { nombre, duracion } = req.body;
    const nuevaCarrera = { nombre, duracion };

    const { error } = crearCarreraSchema.validate(nuevaCarrera);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const carreras = leerCarreras();
    const id = carreras.length > 0 ? carreras[carreras.length - 1].id + 1 : 1;
    nuevaCarrera.id = id;
    carreras.push(nuevaCarrera);
    guardarCarreras(carreras);
    res.status(201).json(nuevaCarrera);
}

const borrar = (req, res) => {
    const id = parseInt(req.params.id);
    let carreras = leerCarreras();
    const index = carreras.findIndex(carrera => carrera.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Carrera no encontrada' });
    }
    carreras.splice(index, 1);
    guardarCarreras(carreras);
    res.json({ message: 'Carrera eliminada correctamente' });
}

module.exports = {
    obtenerTodas,
    obtenerPorId,
    crear,
    borrar
};
