
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

# API de Gestión de Tareas & Almacenamiento S3

Backend desarrollado en Node.js y Express que gestiona la persistencia de tareas y la carga de archivos multimedia a la nube utilizando Amazon Web Services (AWS S3).

##  Arquitectura del Sistema
Usuario → Frontend (Vercel) → Backend API (Render) ──┬──> MongoDB Atlas (Base de datos) └──> AWS S3 (Archivos/Imágenes)

##  Tecnologías Utilizadas
* **Runtime:** Node.js 
* **Framework:** Express.js 
* **Base de Datos:** MongoDB Atlas + Mongoose 
* **Almacenamiento de Archivos:** AWS SDK v3 (`@aws-sdk/client-s3`) + Multer (`memoryStorage`) 
* **Despliegue:** Render


##  Variables de Entorno Asegúrate de crear un archivo `.env` localmente o configurar estas variables en Render: 
```env PORT=3000 MONGO_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/ AWS_ACCESS_KEY_ID=tu_access_key AWS_SECRET_ACCESS_KEY=tu_secret_key AWS_REGION=us-east-1 AWS_BUCKET_NAME=nombre-de-tu-bucket

 Endpoints de la API

Método     Ruta D       escripción                  Payload / Body
GET         /tasks      Obtiene la lista de tareas          N/A
POST        /tasks      Crea una nueva tarea            JSON con datos
POST        /upload     Sube un archivo a S3    multipart/form-data (campo archivo)


