#!/bin/bash

echo "=== TESTE 1: /status ==="
echo "Horário: $(date +'%H:%M:%S')"
curl -s http://localhost:3000/status
echo -e "\n"

echo "=== TESTE 2: /scania/info ==="
echo "Horário: $(date +'%H:%M:%S')"
curl -s http://localhost:3000/scania/info
echo -e "\n"

echo "=== TESTE 3: /vw/info ==="
echo "Horário: $(date +'%H:%M:%S')"
curl -s http://localhost:3000/vw/info
echo -e "\n"
