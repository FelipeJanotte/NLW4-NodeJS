<h1 align="center">
    <img src="./assets/ticket.svg">
</h1>

<h2 align="center">
	Rumo ao próximo nível
	<br/>
	NLW 4 Node.js
</h2>
<p>
</p>
<p>
	Estaremos fazendo um sistema de avaliação do cliente NPS (Net Promoter Score).
</p>

<h3>
	Dependências
</h3>


```shell
NPM
	npm install express --save
	npm install typeorm --save
	npm install reflect-metadata --save
	npm install sqlite3 --save
	npm install uuid --save
	npm install nodemailer --save
	npm install handlebars --save
	npm install yup --save
	npm install express-async-errors --save
	
YARN
	yarn add express
	yarn add typeorm
	yarn add reflect-metadata
	yarn add sqlite3
	yarn add uuid
	yarn add nodemailer
	yarn add handlebars
	yarn add yup
	yarn add express-async-errors
```

<h3>
	Dependências de Desenvolvimento
</h3>


```shell
NPM
	npm install @types/express --save-dev
	npm install typescript --save-dev
	npm install ts-node-dev --save-dev
	npm install @types/uuid --save-dev
	npm install jest --save-dev
	npm install ts-jest --save-dev
	npm install @types/jest --save-dev
	npm install supertest --save-dev
	npm install @types/supertest --save-dev
	npm install @types/nodemailer --save-dev

YARN
	yarn add @types/express -D
	yarn add typescript -D
	yarn add ts-node-dev -D
	yarn add @types/uuid -D
	yarn add jest -D
	yarn add ts-jest -D
	yarn add @types/jest -D
	yarn add supertest -D
	yarn add @types/supertest -D
	yarn add @types/nodemailer -D

SE UTILIZAR WINDOWS
	package.json ->
		"scripts":{
			"test": "cross-env NODE_ENV=test jest"
		}
	NPM
		npm install cross-env -D
	YARN
		yarn add cross-env -D

SE UTILIZAR OUTRO OS
	package.json ->
		"scripts":{
			"test": "NODE_ENV=test jest"
		}
```
