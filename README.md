# Backend Davi Motors

Backend Express del sistema POS. El servicio usa MongoDB Atlas y Cloudinary mediante variables de entorno; no guardes credenciales en Git.

## Render

- Tipo: Web Service
- Build Command: `npm ci`
- Start Command: `npm start`
- Health Check Path: `/health`

Variables necesarias para iniciar: `MONGO_URI`, `MONGO_DB_NAME=davimotors`, `JWT_SECRET` y `CORS_ORIGINS`. Para imágenes: `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY` y `CLOUDINARY_API_SECRET`. Render asigna `PORT` automáticamente. Para enviar correo se necesitan `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` y `SMTP_FROM`.

Mientras no exista la URL definitiva del frontend, `CORS_ORIGINS` puede ser `http://localhost:5173`. Actualízala con la URL exacta de Vercel al desplegar el frontend.

Para desarrollo local, crea un `.env` con las variables necesarias y ejecuta `npm ci` seguido de `npm start`. El archivo `.env` está excluido de Git.

## Crear el primer superadmin

Después de confirmar que Render muestra `Conectado a MongoDB`, agrega temporalmente estas variables en Render y vuelve a desplegar:

- `BOOTSTRAP_SUPERADMIN=true`
- `SUPERADMIN_EMAIL=davimotorss@gmail.com`
- `SUPERADMIN_PASSWORD`: contraseña nueva de al menos 12 caracteres

El backend crea el usuario solo si todavía no hay un superadmin. Si ya existe, registra su correo y no cambia su contraseña. Busca `Superadmin creado` en los logs. Después elimina `BOOTSTRAP_SUPERADMIN` y `SUPERADMIN_PASSWORD` de Render. También puedes ejecutar `node crear_superadmin.js` desde un equipo que tenga acceso a Atlas y las variables configuradas en un `.env` local.
