1. **Instalar o Node.js LTS:**

   - Antes de começar, certifique-se de ter o Node.js LTS instalado em seu sistema. Você pode baixar a versão LTS mais recente em [nodejs.org](https://nodejs.org/). Recomendo instalar no wsl o node pra usar junto com o docker e docker compose.

   - Para usar o docker e docker compose siga essa instruções no [Gist](https://gist.github.com/martinsam16/4492957e3bbea34046f2c8b49c3e5ac0)

   Alguns vídeos

   - https://www.youtube.com/watch?v=qlLcnSvG1rA
   - https://www.youtube.com/watch?v=k9MF9rMJnTE

2. **Instalar as dependências:**

   - Abra o terminal (prompt de comando) no diretório do seu projeto.
   - Execute o seguinte comando para instalar as dependências do projeto:

     ```bash
     npm install
     ```

     Isso instalará todas as bibliotecas e pacotes necessários para o projeto.

   - Iniciar o docker compose
     ```bash
     docker-compose up -d
     ```

3. **Rodar o servidor de desenvolvimento:**

   - Após a instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:
     ```bash
     npm run dev
     ```
     Este comando irá iniciar um servidor local e disponibilizará o seu projeto em [http://localhost:3000](http://localhost:3000). Você pode acessar essa URL no seu navegador para visualizar a aplicação em execução.

4. **Editar a página:**

   - Para editar a página inicial do seu projeto, abra o arquivo `app/page.tsx` no seu editor de código preferido.
   - Faça as alterações desejadas no arquivo `page.tsx`. O Next.js irá atualizar automaticamente a página no navegador conforme você edita o arquivo.

5. **Aprender mais sobre o Next.js:**
   - Para aprender mais sobre o Next.js, você pode consultar a [documentação oficial do Next.js](https://nextjs.org/docs) e o [tutorial interativo do Next.js](https://nextjs.org/learn).

