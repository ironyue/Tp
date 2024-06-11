const fs = require('fs');
const path = require('path');
const { crearMateriaSchema } = require('../middleware/validarSchemas');

const dataFilePath = path.join(__dirname, '../data/data.json');

const leerMaterias = () => {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data).materias;
}

const guardarMaterias = (materias) => {
    const data = fs.readFileSync(dataFilePath);
    const dataObj = JSON.parse(data);
    dataObj.materias = materias;
    fs.writeFileSync(dataFilePath, JSON.stringify(dataObj, null, 2));
}

const obtenerTodas = (req, res) => {
    const materias = leerMaterias();
    res.json(materias);
}

const obtenerPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const materias = leerMaterias();
    const materia = materias.find(materia => materia.id === id);
    if (!materia) {
        return res.status(404).json({ error: 'Materia no encontrada' });
    }
    res.json(materia);
}

const crear = (req, res) => {
    const { nombre } = req.body;
    const idCarrera = parseInt(req.params.idCarrera);
    const nuevaMateria = { nombre, idCarrera };

    const { error } = crearMateriaSchema.validate(nuevaMateria);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const materias = leerMaterias();
    const id = materias.length > 0 ? materias[materias.length - 1].id + 1 : 1;
    nuevaMateria.id = id;
    materias.push(nuevaMateria);
    guardarMaterias(materias);
    res.status(201).json(nuevaMateria);
}

const borrar = (req, res) => {
    const id = parseInt(req.params.id);
    let materias = leerMaterias();
    const index = materias.findIndex(materia => materia.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Materia no encontrada' });
    }
    materias.splice(index, 1);
    guardarMaterias(materias);
    res.json({ message: 'Materia eliminada correctamente' });
}

module.exports = {
    obtenerTodas,
    obtenerPorId,
    crear,
    borrar
};
