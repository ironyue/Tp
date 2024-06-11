const express = require('express');
const app = express();
const carrerasRoutes = require('./routes/carrera');
const materiasRoutes = require('./routes/materias');
const { validarCrearCarrera } = require('./middleware/validarSchemas');
const { validarCrearMateria } = require('./middleware/validarSchemas');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

app.use(express.json());

app.use('/carreras', validarCrearCarrera, carrerasRoutes);
app.use('/materias', validarCrearMateria, materiasRoutes);

