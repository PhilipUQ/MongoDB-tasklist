DOCUMENTACION 

BASE DE DATOS LISTA DE TAREA

------------- coleccion: tarea_hogar -----------------

Documento MongoDB Compass: https://docs.google.com/document/d/18B9jqPK5zS2UTePisS0XUhe7DS6-UcxuV7ycBO2kiXM/edit?usp=sharing

Documento MongoDB Atlas: https://docs.google.com/document/d/12R7IVxnvoSdHl5KKboVf4Jtz6oIu8gl61GKFUqKcMlY/edit?usp=sharing


------------------------------------------------------

------------- coleccion: tarea_trabajo -----------------

Documento MongoDB Compass: https://docs.google.com/document/d/1cEmh4cJMNcBuMI0dWJQm3yPD2GEO5k19r1FikKGomQU/edit?usp=sharing

Documento MongoDB Atlas: https://docs.google.com/document/d/1LZqb0tptYHVw-7e1HeUt2rer4LmeTMj1w2IZCkA6oow/edit?usp=sharing


--------------------------------------------------------

------------- coleccion: tarea_descanso -----------------

Documento MongoDB Compass: https://docs.google.com/document/d/19j93OUzJrxnB3-c2Yj_jmpBZNflKRDonBiBIw5U9Wek/edit?usp=sharing

Documento MongoDB Atlas: https://docs.google.com/document/d/1Yk8AQib9QXfSaCfZml3_4tPb6V0yC9Wruaijp7KTcG0/edit?usp=sharing

---------------------------------------------------------






metodo de uso

operaciones del CRUD

Para ejecutar las operaciones de CRUD lo primero que se hace es:

corre desde un servidor, así que se debe iniciar el servidor npm run start

------------------- visualizar tareas --------------------

Para visualizar las tareas se debe usar el método GET 
GET https://localHost:3000/tareas

—--------------------------------------------------------

------------------- agregar tareas --------------------

Para agregar una nueva tarea se debe usar el método POST https://localHost:3000/tareas

una vez en post se le pasan los parámetros  
{
"titulo": "hacer mercado",
 "descripcion": "comprar pan, leche, huevos y snacks",
 "estado": false,
 "prioridad": "Media"
}

—--------------------------------------------------------

------------------- actualizar tareas --------------------


Para actualizar una tarea se debe usar el método PUT https://localHost:3000/tareas/:id

es necesario pasarle al requerimiento el id predeterminado que se crea al agregar la tarea, de esta manera mongoDB sabe qué tarea va a actualizar

una vez en put se le pasan los parámetros  
{
"título": "actualización de título",
 "descripcion": "actualización de descripción",
 "estado": true,
 "prioridad": "Baja"
}

—--------------------------------------------------------

------------------- eliminar tareas --------------------

Para eliminar una tarea se debe usar el método DELETE https://localHost:3000/tareas/:id

es necesario pasarle al requerimiento el id predeterminado que se crea al agregar la tarea, de esta manera mongoDB sabe qué tarea va a eliminar


