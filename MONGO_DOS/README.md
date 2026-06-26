
## Setup
1. npm install
2. Copiar .env.example a .env y llenar las variables
3. npm start

## Endpoints

### Tareas
GET    /api/tasks              # traer todas (acepta ?priority=high)
POST   /api/tasks              # crear una tarea
PUT    /api/tasks/:id          # actualizar una tarea
DELETE /api/tasks/:id          # eliminar una tarea

### Usuarios
POST   /api/users              # crear un usuario
GET    /api/users              # traer todos los usuarios