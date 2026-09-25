#!/bin/bash
pm2 save
pm2 list > "$HOME/pm2_processos_$(date +'%Y-%m-%d_%H-%M-%S').txt"
echo "Lista salva com sucesso!"
