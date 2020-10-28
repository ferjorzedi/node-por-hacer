 const fs = require('fs');

 let listadoPorHacer = [];

 const guardarDB = () => {
     let data = JSON.stringify(listadoPorHacer)
     fs.writeFile('db/data.json', data, (err) => {
         if (err) { throw new Error('Error al crear el archivo', err) } else {
             console.log("Tarea Guardada ");
         }
     });

 }

 const cargarDB = () => {

         try {
             listadoPorHacer = require('../db/data.json');
             // console.log(listadoPorHacer);
         } catch (error) {
             listadoPorHacer = [];
         }


     }
     // crea tarea
 const crear = (descripcion) => {

     cargarDB();

     let porHacer = {
         descripcion,
         completado: false


     };

     listadoPorHacer.push(porHacer);

     guardarDB();

     return porHacer;

 }

 // lista las tareas
 const getListado = () => {
     cargarDB();
     // listadoPorHacer = require('../db/data.json');
     return listadoPorHacer;

 }

 // Actualizar tarea

 const actualizar = (descripcion, completado = true) => {
     cargarDB();

     let index = listadoPorHacer.findIndex(tarea => {
         return tarea.descripcion === descripcion;
     });

     if (index >= 0) {

         listadoPorHacer[index].completado = completado;
         guardarDB();
         return true;
     } else {
         return false;
     }

 }

 //

 const borrar = (descripcion) => {

     cargarDB();

     let nuevolistado = listadoPorHacer.filter(tarea => {
         return tarea.descripcion !== descripcion;
     });

     if (listadoPorHacer.length === nuevolistado.length) {
         return false;
     } else {
         listadoPorHacer = nuevolistado;
         guardarDB();
         return true;
     }
 }

 // exportar las funciones
 module.exports = {
     crear,
     getListado,
     actualizar,
     borrar
 }