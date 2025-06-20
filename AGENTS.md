# Regras do Repositório

Este monorepo contém um frontend em Next.js e um backend em NestJS, ambos em TypeScript.

## Mensagens de commit
- Escreva mensagens curtas em **português**.

## Formatação de código
- Use **duas espaços** para identação em arquivos TypeScript ou JavaScript.
- Sempre que alterar arquivos `.ts`, `.tsx`, `.js` ou `.jsx`, execute:
  ```bash
  npx prettier -w <arquivo>
  ```

## Dependências
- Antes de enviar mudanças relevantes, confirme que `npm install` roda sem erros nos diretórios `backend` e `frontend`.

## Observações
- Atualmente não há testes automatizados.
