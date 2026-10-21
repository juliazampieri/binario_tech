const db = require('../database/connection');

const telemetriaController = {
  // Cadastrar nova leitura de telemetria associada a um veículo
  registrarLeitura: async (req, res) => {
    try {
      const { veiculo_id, velocidade, temperatura_motor } = req.body;

      if (!veiculo_id || velocidade === undefined || temperatura_motor === undefined) {
        return res.status(400).json({ erro: "Campos 'veiculo_id', 'velocidade' e 'temperatura_motor' são obrigatórios." });
      }

      const veiculoExiste = await db('veiculos').where({ id: veiculo_id }).first();
      if (!veiculoExiste) {
        return res.status(404).json({ erro: "Veículo informado não existe no banco de dados." });
      }

      const [id] = await db('telemetria').insert({
        veiculo_id,
        velocidade,
        temperatura_motor
      });

      res.status(201).json({ id, veiculo_id, velocidade, temperatura_motor, mensagem: "Leitura registrada com sucesso!" });
    } catch (erro) {
      res.status(500).json({ erro: "Erro ao registrar telemetria no banco de dados." });
    }
  },

  buscarPorVeiculo: async (req, res) => {
    try {
      const { id } = req.params;

      const leituras = await db('telemetria')
        .where({ veiculo_id: id });

      res.status(200).json(leituras);
   
    } catch (erro) {
      console.error(erro);
      res.status(500).json({
        erro: "Erro ao buscar telemetria do veículo."
      });
    }

  },

  

      // Listar todas as leituras com dados do Veículo (INNER JOIN)
  listarRelatorioCompleto: async (req, res) => {
    try {
      const relatorioQuery = db('telemetria')
        .join('veiculos', 'veiculos.id', '=', 'telemetria.veiculo_id')
        .select(
          'telemetria.id as telemetria_id',
          'veiculos.placa',
          'veiculos.montadora',
          'veiculos.modelo',
          'telemetria.velocidade',
          'telemetria.temperatura_motor',
          'telemetria.capturado_em'
        );

      if (req.query.alerta === 'true') {
        relatorioQuery.where('telemetria.temperatura_motor', '>', 95);
      }

      const relatorio = await relatorioQuery;
      res.status(200).json(relatorio);
    } catch (erro) {
      res.status(500).json({ erro: "Erro ao gerar relatório com Inner Join." });
    }
  }
};

module.exports = telemetriaController;
