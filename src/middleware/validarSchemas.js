const Joi = require('joi');
const { crearCarreraSchema } = require('./validarSchemas');
const { crearMateriaSchema } = require('./validarSchemas');

const validarCrearCarrera = (req, res, next) => {
    const { error } = crearCarreraSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

const validarCrearMateria = (req, res, next) => {
    const { error } = crearMateriaSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = { validarCrearCarrera, validarCrearMateria  };