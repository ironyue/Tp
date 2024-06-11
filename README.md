# API REST - Proyecto Laboratorio Software
## Integrantes del Grupo:
+ Echaniz Agustín
+ Ramos Pablo
+ Mariano Bihurriet
+ Morandi Diego
## Descripción del Proyecto:
Este proyecto consiste en una API REST desarrollada en Node.js utilizando el framework Express. La API expone recursos relacionados con carreras y materias, permitiendo operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre estos recursos. La estructura del proyecto sigue las convenciones de separación por recurso, con rutas, controladores y middlewares organizados de manera adecuada.

## Estructura del Proyecto:
El proyecto sigue una estructura básica de archivos y carpetas:

+ index.js: Archivo principal que inicia el servidor Express y configura las rutas y middlewares.
+ routes/: Carpeta que contiene los archivos de definición de rutas para cada recurso (carreras y materias).
+ controllers/: Carpeta que contiene los controladores para cada recurso, encargados de manejar las solicitudes HTTP.
+ middlewares/: Carpeta que contiene los middlewares utilizados en la aplicación, incluyendo los de validación de esquemas.
+ data/: Carpeta que contiene el archivo JSON donde se almacenan los datos de las carreras y materias.
## Ejemplo del JSON de Datos:
El archivo data.json en la carpeta data contiene un ejemplo de cómo están estructurados los datos de las carreras y materias:

## Instalación y Ejecución de la API:
Para instalar y ejecutar la API, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:
+ `npm install`
4. Después de que se completen las instalaciones, puedes ejecutar la API con el siguiente comando:
+ `npm run dev`

+ Por defecto, la API se ejecutará en el puerto 3000. Si deseas cambiar el puerto, puedes establecer la variable de entorno `PORT` antes de ejecutar el comando `npm start`.
