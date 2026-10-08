# Backend Davi Motors

Backend Express del sistema POS. El servicio usa MongoDB Atlas y Cloudinary mediante variables de entorno; no guardes credenciales en Git.

## Render

- Tipo: Web Service
- Build Command: `npm ci`
- Start Command: `npm start`
- Health Check Path: `/health`

Variables necesarias para iniciar: `MONGO_URI`, `MONGO_DB_NAME=davimotors`, `JWT_SECRET` y `CORS_ORIGINS`. Para imágenes: `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` y `CLOUDINARY_API_SECRET`. Render asigna `PORT` automáticamente. Revisa `.env.example` para las variables de correo y de creación del primer administrador.

Mientras no exista la URL definitiva del frontend, `CORS_ORIGINS` puede ser `http://localhost:5173`. Actualízala con la URL exacta de Vercel al desplegar el frontend.

Para desarrollo local, copia `.env.example` a `.env`, completa sus valores y ejecuta `npm ci` seguido de `npm start`.
