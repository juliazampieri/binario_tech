#!/bin/bash
#
echo "========================================================================"
echo " AUDITORIA DE RELACIONAMENTOS (JOIN) - BINARIO TECH"
echo "========================================================================"

echo -e"\n[1] Cadastrando veiculos Scania..."
curl -s -X POST http://localhost:300/api/v1/telemetria \
	-H "Content-Type: applicatin 
