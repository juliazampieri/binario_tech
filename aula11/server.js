require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarBanco = require('./src/config/database');
const alertaRoutes = require('./src/routes/alertaRoutes);

const app = express();
	constPORT = process.env.PORT || 3000;

???????????????????????????



//Rotas
	app.use('/api/v1/alertas', alertaRoutes);
	conectarBanco()




?///
