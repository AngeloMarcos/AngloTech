#!/usr/bin/env bash
set -euo pipefail

# 1) Atualiza main local
git fetch origin
git checkout main
git pull origin main

# 2) Lista todos os branches remotos que não sejam main nem HEAD
branches=$(git branch -r \
  | grep 'origin/' \
  | grep -Ev 'origin/(HEAD|main)$' \
  | sed 's# *origin/##')

# 3) Itera e faz merge de cada um
for b in $branches; do
  echo
  echo "🌀 Fazendo merge de origin/$b em main..."
  # Garante que temos a última versão do branch remoto
  git fetch origin $b:$b
  # Cria backup em caso de problema
  # git branch "backup/$b" "main"
  git merge --no-ff "$b" -m "Merge origin/$b into main"
done

# 4) Empurra main de volta ao remoto
echo
echo "🚀 Todos os merges concluídos. Enviando main para origin..."
git push origin main

echo "✅ Feito!"
