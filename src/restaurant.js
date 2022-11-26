/* eslint-disable max-len */

/*
  A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

  BOAS PRÁTICAS TDD: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E VOLTE A ESTE ARQUIVO QUANDO FOR INDICADO!
*/

// Faça os ítens de 1 a 3 no arquivo tests/restaurant.spec.js

// 4: Crie uma função `createMenu()` que, recebendo um objeto como parâmetro, retorna esse objeto no seguinte formato: 
//  { fetchMenu: () => objetoPassadoPorParametro }.
const checkPrice = (item, list) => {
  for (let i = 0; i < Object.values(list).length; i += 1) {
    if (Object.keys(list)[i] === item) {
      return Object.values(list)[i];
    }
  }
  return 0;
};

const createMenu = (object) => {
  const obj = {
    fetchMenu: () => object,
    consumption: [],
    order: (item) => {
      const keys = [];
      const food = Object.keys(object.food);
      const drink = Object.keys(object.drink);
      for (let i = 0; i < food.length; i += 1) {
        keys.push(food[i]);
      }
      for (let i = 0; i < drink.length; i += 1) {
        keys.push(drink[i]);
      }
      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i] === item) {
          obj.consumption.push(item);
          return obj.consumption;
        }
      }
      return 'Item indisponível';
    },
    pay: () => {
      let sum = 0;
      const { consumption } = obj;
      const { food } = obj.fetchMenu();
      const { drink } = obj.fetchMenu();
      for (let i = 0; i < consumption.length; i += 1) {
        const item = consumption[i];
        const priceFood = checkPrice(item, food);
        sum += priceFood;
        const priceDrink = checkPrice(item, drink);
        sum += priceDrink;
      }
      return sum;
    },
  };
  return obj;
};

const meuRestaurante11 = createMenu({ food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } });
meuRestaurante11.order('coxinha');
meuRestaurante11.order('sopa');
meuRestaurante11.order('agua');
meuRestaurante11.order('agua');
console.log(meuRestaurante11.pay());
// Faça o item 5 no arquivo tests/restaurant.spec.js

// 6: Adicione ao objeto retornado por `createMenu()` uma chave de nome `consumption` que, como valor inicial, tem um array vazio.

// Faça o item 7 no arquivo tests/restaurant.spec.js

// 8: Crie uma função, associada à chave 'order', que, ao receber uma string como parâmetro, adiciona essa string ao array da chave 'consumption'.
// - se a string existir nas chaves 'food' ou 'drink', deve ser adicionada ao array consumption
// - senão, deve exibir a mensagem "Item indisponível" e não adicionar nada ao array
// Ex: obj.order('coxinha') --> ['coxinha']
// Ex: obj.order('picanha') --> Exibe "Item indisponível"

// Faça os ítens de 9 a 11 no arquivo tests/restaurant.spec.js

// 12: Adicione ao objeto retornado por `createMenu()` uma chave `pay` armazenando uma função que:
// - percorrerá item a item de `objetoRetornado.consumption`;
// - fará a soma do preço desses itens;
// - retornará o valor somado acrescido de 10%.
// DICA: para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

module.exports = createMenu;
