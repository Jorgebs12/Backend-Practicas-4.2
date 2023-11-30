ENUNCIADO
Doctor Who cumple 60 años y los episodios especiales están a la vuelta de esquina, así que vamos a hacer un API REST para ayudar a la TARDIS (Time And Relative Dimension In Space) organizarse ante la nueva reiterada llegada de David Tennant.

La Tardis guarda los siguientes datos en sus memorias Gallifreyanas según lo que ha visitado en sus diferentes viajes.

- Dimensiones --> Con los planetas visitados en la misma
- Planetas --> Con las personas relevantes a las experiencias en el mismo
- Personas
- Actual camuflaje de la TARDIS
- Número de regeneración del Time Lord que la use
- Año en el que se encuentra actualmente

Las dimensiones, planetas y personas se deberán guardar en diferentes colecciones de mongo atlas y ser relacionadas por id's entre si llegando a una sola final en la que se guarde cada TARDIS.

El api deberá de poseer llamadas para ver, crear y modificar TARDISs además de todos los elementos de su interior, cada llamada tendrá que ser del método requerido por su funcionalidad.

ENDPOINTS
GET
GET /api/getDimensiones/:id: Obtener información sobre una dimensión específica.
GET /api/getDimensiones: Obtener información sobre todas las dimensiones.
GET /api/getPlanetas/:id: Obtener información sobre un planeta específico.
GET /api/getPersonas/:id: Obtener información sobre una persona específica.
GET /api/getTardis/:id: Obtener información sobre una Tardis específica.
GET /api/getTodasDimensiones: Obtener información sobre todas las dimensiones.

POST
POST /api/postDimensiones: Crear una nueva dimensión.
POST /api/postTardis: Crear una nueva Tardis.
POST /api/postPersonas: Crear una nueva persona.
POST /api/postPlanetas: Crear un nuevo planeta.

DELETE
DELETE /api/deleteDimensiones/:id: Eliminar una dimensión por ID.
DELETE /api/deletePlanetas/:id: Eliminar un planeta por ID.
DELETE /api/deletePersonas/:id: Eliminar una persona por ID.
DELETE /api/deleteTardis/:id: Eliminar una Tardis por ID.

MANEJO DE ERROES
En caso de existir errores, se mostraran por pantalla dicho error.

VALIDACIONES
Se haran validaciones para comprobar que las referencias en el array realmente existen en la colección. Si alguna referencia no se encuentra, se devuelve false.
Esto se realizada en dimensiones.ts planetas.ts tardis.ts
