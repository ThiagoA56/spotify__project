// rafce = atalho de estrutura padrão arrow function react
import React from "react";

const App2 = () => {
  return <div>App2</div>;
};

export default App2;

// Arrow Function
// App2 é uma função() e tem esses parametros{tudo dentro}
// Neste caso, como essa função só tem 1 instrução...
// não precisa da palavra chave return + {}
// const App2 = () => <h1>Olá, Mundo!</h1>;

// nomeação de componentes
// PascalCase ou seja MainSection

// nomeação de variável/função...
// camelCase ou seja variavelNova/functionDois

//nomeação de classes é Kebab case
//classe-artist

// export default, posso importar com qualquer nome sem chaves
// export "sem default", só pode importar entre {} e o nome importado

// Self closing tag = <tag/>

// class é uma palavra reservada do JS
// className ="" NO REACT

// nomeação de classes em CSS - Metodo BEM
// Blocks + Elements + Modifiers
// Bloco é algo que pode ser usado em outros locais
// Elements é algo que faz parte de um bloco e não é um componente
// Modifiers o que vai modificar, ser o diferencial ex:cor/font
// ESTRUTURA: bloco__elemento--modificador
// ex: header (bloco)
// ex: header__link (bloco__elemento)
// ex: header__link--small (bloco__elemento--modificador)
// item__list--header
// nomes compostos são separados com hífen ex:  item-list

// tag vazia em react se chama Fragment

// COMPONENTES recebem PROPS
// PROPS são os parâmetros/argumentos que estão sendo passados
// Ou seja, o componente é uma função que vai realizar as ações
// de uma props

// Operador Ternário
//         {items === 5 ? (
//   <>
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
// </>
// ) : (
// <>
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
//   <SingleItem />
// </>
// )}

// Criando um array, preenchendo(fill).percorrendo(map)
// através docurrenteValue e o index
// Atribuindo ao componente SingleItem uma chave única

// {Array(items).fill().map((currentValue, index) => (
//   <SingleItem key={`${title}-${index}`} />
// ))}

// Spread operator cria uma cópia de um array ou objeto
// {...obj}
// Não substitui, apenas copia aquele endereço

// re-renderização?
// quando uma variável de estado de um componente recebe uma atualização

// hooks - useState(variável de estado)
// setItems é uma função que permite alterar o valor de uma variável de estado [set+nome da variável]
