#!/bin/bash

echo "Encerrando o processo Node.js..."
fuser -k 3017/tcp

echo "Excluindo ocorrencias.json..."
rm -f ocorrencias.json

echo "Ambiente de testes limpo!"
