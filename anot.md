## anotações

* npm install typescript -D [instalar typescript]
* npm install express
* npm install @types/express -D [types do express (autocomplete)]
* npx tsc --init [inicia o tsconfig.json]
* npm install ts-node-dev -D (ferramentas de apoio dev a ts no node)
    * depois adicione  "dev": "ts-node-dev src/server.ts" no packtage.json
    * esse ts-node-dev executa
* npm install express-async-errors [biblioteca trativa de erros]
* npm install cors [habilitar todos ips acessarem api]
* npm i --save-dev @types/cors (tipagens do cors (intelissense))
* baixe o instalador do postgres e mete bala. next next
* npm install prisma
* npm install @prisma/client
* npx prisma init [cria o prisma scheme]
* npx prisma migrate dev
* npm install bcryptjs + npm install @types/bcryptjs -D
    * instalar bcryptjs e a tipagem (essa ultima só como desenvolvimento)
* npm install jsonwebtoken + npm install @types/jsonwebtoken
* npm install dotenv => gerenciar var ambiente
* para você fazer o TS identificar onde está sua pasta de tipos, coloca "typeRoots": ["./src/@types"], no seu tsconfig.json