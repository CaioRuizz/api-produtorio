# API Produtório

API desenvolvida utilizando Noje.js para resolver o problema do produtório


# Executando o projeto

para executar o projeto é necessário instalar as dependências executando o seguinte comando na raíz do projeto:

```
npm install
```

em seguida executar o seguinte comando para executar o projeto

```
npm start
```

Caso o sistema operacional não identifique o comando npm, verifique se o [Node.js](https://nodejs.org) está instalado corretamente em seu computador


# Rotas da API

- /iterativo

Nesta rota, o sistema irá fazer o cálculo utilizando uma função iterativa

- /recursivo

Nesta rota, o sistema irá fazer o cálculo utilizando uma função recursiva

Em ambas as rotas será necessário enviar um corpo contendo um JSON informando os seguintes parâmetros:

- m: número inteiro positivo, obrigatório
- n: número inteiro maior que m, obrigatório

ambas as rotas retornarão o resultado do produtório no seguinte formato:

```
{
    "metodo": "iterativo",
    "resultado": 1
}
```

Caso algum parâmetro seja passado de forma incorreta ou não seja informado o resultado será nulo