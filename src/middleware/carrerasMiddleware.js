const { validarSchemas, crearCarreraSchema } = require('./validarSchemas');
const fs = require('fs');
const path = require('path');


const dataFilePath = path.join(__dirname, '../data/data.json');

const leerCarreras = () => {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
}

const guardarCarreras = (carreras) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(carreras, null, 2));
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
    const carreras = leerCarreras();
    const id = carreras.length > 0 ? carreras[carreras.length - 1].id + 1 : 1;
    const nuevaCarrera = { id, nombre, duracion };
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
    borrar
};
