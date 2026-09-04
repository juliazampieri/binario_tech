const Manutencao = require('../models/Manutencao');

const manutencaoController = {
	criar: async (req, res) => {
		try{
			const novaManutencao = await Manutencao.create(req.body);
			res.status(201).json(novaManutencao);
		} catch (erro) {
			res.status(400).json({ erro: "Erro ao registar manutencao", detalhe: erro.message });
		}
	},

	listarComFiltros: async (req, res) => {
		try {
			const { minCusto, status } = req.query;
			let query = {};
			
			if (minCusto) {
				query.custoTotal = { $gte: Number(minCusto) };
			}

			if (status) {
				query.status = status;
			}
			const resultados = await Manutencao.find(query).sort({ createdAt: -1 });
			res.status(200).json(resultados);
		} catch (erro) {
			res.status(500).json({ erro: "Erro ao consultar manutencoes." })
		}

	},

	atualizarStatus: async (req, res) => {
		try {
			const { id } = req.params;
			const { status } = req.body;

			const atualizado = await Manutencao.findByIdAndUpdate (
				id, 
				{ status },
				{ new: true, runValidators: true }
			);

			if (!atualizado) {
				return res.status(404).json({ erro: "Registro de manutencao nao encontrado." });
			}
			res.status(200).json(atualizado);
		} catch (erro) {
			res.status(400).json({ erro: " Erro ao atualizar registro.", detalhe: erro.message });
		}
	},

	excluir: async (req, res) => {
		try {
			const { id } = req.params;
			const removido = await Manutencao.findByIdAndDelete(id);

			if (!removido) {
				return res.status(404).json({ erro: "Registro nao encontrado para exclusao" });
			}

			res.status(200).json({ mensagem: "Registro de manutencao excluido com sucesso!" });
		} catch (erro) {
			res.status(500).json({ erro: "Erro ao excluir registro." });
		}
	}
};

module.exports = manutencaoController;













