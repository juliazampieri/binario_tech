const expres = require('express');
const cors = require('express');
constTelemetriaRoutes = require('./src/routes/telemetriaRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1/telemetria', telemetriaRoutes);

app.use((req, res) => {
	res.status(404).json({ erro: "Rota nao encontrada no binario tech" });
});

app.listen(PORT, () => {
	console.log(`[Binario Tech] Servidor Relacional Ativo na Porta ${PORT}`);
});
