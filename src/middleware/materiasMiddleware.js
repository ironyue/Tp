const { validarSchemas, crearMateriaSchema } = require('./validarSchemas');
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/data.json');

const obtenerPorIdCarrera = (req, res) => {
    const idCarrera = parseInt(req.params.idCarrera);
    const materias = leerMaterias();
    const materiasCarrera = materias.filter(materia => materia.idCarrera === idCarrera);
    res.json(materiasCarrera);
}

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
    const materias = leerMaterias();
    const id = materias.length > 0 ? materias[materias.length - 1].id + 1 : 1;
    const nuevaMateria = { id, nombre, idCarrera };
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

const validarCrearMateria = (req, res, next) => {
    const { error } = crearMateriaSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = {
    obtenerTodas,
    obtenerPorId,
    crear: [validarCrearMateria, crear],
    borrar,
    obtenerPorIdCarrera,
};
