# <img src="https://avatars1.githubusercontent.com/u/7063040?v=4&s=200.jpg" alt="HU" width="24" /> Hurb Node Conversion API

Para instalar e rodar o projeto é só executar os comandos abaixo. =]


#### Clonar repositório e acessar $seu-fork e cd $seu-fork:
> git clone https://github.com/RaphaelfsOliveira/challenge-bravo.git && cd challenge-bravo/hurb-app/backend/


#### Comando para instalar dependências:
> sudo npm i


#### Comando para executar a aplicação:
> sudo docker-compose up

- Depois de subir o projeto use as urls definidas abaixo.


## Endpoints API

##### Listagem de moedas

Exemplo abaixo:

- http://localhost:8000/conversion/


##### Conversão de Moedas

Parâmentros obrigatórios: `from=`, `to=`, `amount=`.

Formatação do parâmentros: `from={ moeda }&to={ moeda }&amount={ valor }`.

Exemplo abaixo:

- http://localhost:8000/conversion/from=BRL&to=ARS&amount=3000


## TESTES

Para rodar os testes basicos que fiz da API vá ate a pasta `backend` de lá.

- Para testes de performance:
> artillery run tests/performance/test-performance.yml

- Para testes de check-up:
> npm run test

> `OBS: finalizar o servidor com Ctrl+C após este teste de check-up`
> `utilizei o nodemon para fazer esse script rodar.`
