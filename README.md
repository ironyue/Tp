# API REST - Proyecto Laboratorio Software
## Integrantes del Grupo:
+ Echaniz Agustín
+ Ramos Pablo
+ Mariano Bihurriet
+ Morandi Diego
Descripción del Proyecto:
Este proyecto consiste en una API REST desarrollada en Node.js utilizando el framework Express. La API expone recursos relacionados con carreras y materias, permitiendo operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre estos recursos. La estructura del proyecto sigue las convenciones de separación por recurso, con rutas, controladores y middlewares organizados de manera adecuada.

Estructura del Proyecto:
El proyecto sigue una estructura básica de archivos y carpetas:

index.js: Archivo principal que inicia el servidor Express y configura las rutas y middlewares.
routes/: Carpeta que contiene los archivos de definición de rutas para cada recurso (carreras y materias).
controllers/: Carpeta que contiene los controladores para cada recurso, encargados de manejar las solicitudes HTTP.
middlewares/: Carpeta que contiene los middlewares utilizados en la aplicación, incluyendo los de validación de esquemas.
data/: Carpeta que contiene el archivo JSON donde se almacenan los datos de las carreras y materias.
Ejemplo del JSON de Datos:
El archivo data.json en la carpeta data/ contiene un ejemplo de cómo están estructurados los datos de las carreras y materias:
