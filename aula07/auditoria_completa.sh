#!/bin/bash

LOG="auditoria.log"

echo "========================================" >> "$LOG"
echo "AUDITORIA COMPLETA - $(date)" >> "$LOG"
echo "========================================" >> "$LOG"

echo -e "\n[1] Consultando Telemetria Scania..." | tee -a "$LOG"
curl -s -i http://localhost:3017/api/v1/telemetria/scania >> "$LOG"

echo -e "\n[2] Consultando Telemetria Mercedes-Benz..." | tee -a "$LOG"
curl -s -i http://localhost:3017/api/v1/telemetria/mercedes >> "$LOG"

echo -e "\n[3] Testando rota inexistente (Volvo)..." | tee -a "$LOG"
curl -s -i http://localhost:3017/api/v1/telemetria/volvo >> "$LOG"

echo -e "\nAuditoria concluída. Resultados salvos em $LOG."
