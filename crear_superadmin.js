const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const Usuario = require('./models/usuario.model.js');

dotenv.config();

const run = async () => {
  const email = String(process.env.SUPERADMIN_EMAIL || '').trim().toLowerCase();
  const password = process.env.SUPERADMIN_PASSWORD;
  const nombre = String(process.env.SUPERADMIN_NAME || 'Administrador').trim();
  if (!email || !password) {
    throw new Error('Configura SUPERADMIN_EMAIL y SUPERADMIN_PASSWORD antes de crear el administrador');
  }

  await mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.MONGO_DB_NAME || 'davimotors'
  });

  const rol = 'superadmin';

  const hashedPassword = await bcrypt.hash(password, 10);
  const existente = await Usuario.findOne({ email });

  if (existente) {
    existente.password = hashedPassword;
    existente.nombre = nombre;
    existente.rol = rol;
    await existente.save();
    console.log('🔁 Superadmin actualizado');
  } else {
    await Usuario.create({ email, password: hashedPassword, nombre, rol });
    console.log('✅ Superadmin creado');
  }

  await mongoose.disconnect();
};

run().catch((err) => {
  console.error('❌ Error al crear superadmin:', err);
  process.exit(1);
});
