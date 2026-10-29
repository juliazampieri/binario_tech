const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');
const { regrasCadastroVeiculo } = require('../middlewares/veiculoValidator');
const validarRequisicao = require('../middlewares/validarRequisicao');
const validarContentType = require('../middlewares/validarContentType');

router.post('/', validarContentType, regrasCadastroVeiculo, validarRequisicao, veiculoController.cadastrar);

module.exports = router;
