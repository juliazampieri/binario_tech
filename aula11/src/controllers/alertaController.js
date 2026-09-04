const Alerta = require('../models/Alerta');

const alertaController = {
	criarAlerta: async (req, res) => {
		try{
			const { equipamentoId, nivelSeveridade, temperaturaMedida, metadados } = req.body;

			const novoAlerta = await Alerta.create({
				equipamentoId,
				nivelSeveridade,
				temperaturaMedida,
				metadados
			});

			res.status(201).json(novoAlerta);
		} catch (erro) {
			res.status(400).json({ erro: "Erro ao salvar alerta no MongoDB", detalhe erro .message });
		}
	},

	listarAlertas: async (req, res) => {
		try {
			const alertas = await Alerta.find().sort({ registradoEm: -1 });
			res.status(200).json(alertas);
		} catch (erro) {
			res.status(500).json({ erro: " Erro ao consultar colecao no MongoDB" });
		}
	}
};

module.exports = alertaController;
