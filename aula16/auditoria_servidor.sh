echo "========================================================================"
echo " AUDITORIA DE SERVIDOR"
echo "========================================================================"

echo "Listando staus de execucao do processo Node.js"
ps aux | grep node >> ./processos.log

echo "Resultado da Lista:"
sleep 2
cat processos.log 
