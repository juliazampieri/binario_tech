require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3017;

app.use(express.json());

//Rota de status do serviço

app.get('/api/v1/telemetria/status', (req, res) => {
	res.json({
		servico: "Serviço de Telemetria Binario tech",
		status: "OPERACIONAL",
		uptime: process.pid,
		timestamp: new Date()
	});
});

//Rota para simular falha critica / crash da aplicacao

app.get('/api/v1/telemetria/crash', (req, res) => {
	console.error(`[ALERTA] falha critica simulada pelo PID ${process.pid}}`);
	res.sattus(500).json({ mensagem: "Simulando falha grave no processo!"});
	setTimeout(() => {
		process.exit(1); // encerra o processo node forcadamente
	}, 1000);
});

app.listen(PORT, () => {
	console.log(`[Binario Tech] Microservico ativo na porta ${PORT} (PID: ${process.pid})`);
});


