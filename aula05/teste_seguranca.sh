#!/bin/bash

URL="http://localhost:3017/api/v1/motoristas"
API_KEY="binario-tech-secret-2026"
LOG="audit_seguranca.log"

echo "=== AUDITORIA DE SEGURANCA ===" > "$LOG"

echo "Tentativa 1 - Sem API Key:" >> "$LOG"
curl -s -i "$URL" >> "$LOG"
echo "" >> "$LOG"

echo "Tentativa 2 - Sem API Key:" >> "$LOG"
curl -s -i "$URL" >> "$LOG"
echo "" >> "$LOG"

echo "Tentativa 3 - Sem API Key:" >> "$LOG"
curl -s -i "$URL" >> "$LOG"
echo "" >> "$LOG"

echo "Tentativa 4 - Com API Key:" >> "$LOG"
curl -s -i -H "X-API-KEY: $API_KEY" "$URL" >> "$LOG"
echo "" >> "$LOG"

echo "Auditoria concluida. Resultado salvo em $LOG"
