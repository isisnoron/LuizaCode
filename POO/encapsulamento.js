/**
 * Encapsulamento - Exemplo
 * Exercicio 1 - Quero que vocês pesquisem sobre modos de encapsular atributos (#) e tente fazer isso na Pessoa
 */
class Pessoa {
  #idade 

  constructor(idade) {
    this.#idade = idade;
  }

  _verificaIdade() {
    if (this.#idade > 18) {
      console.log('Maior de Idade');
    } else {
      console.log('Menor de Idade', 1)
    }
  }
}

let pessoa = new Pessoa(15);
console.log(pessoa._verificaIdade(), 2);

//SEM Encapsular
// const idade = 34;

// function _verificaIdade() {
//   if (idade > 18) {
//     console.log("Maior de Idade");
//   } else {
//     console.log("Menor de Idade");
//   }
// }
// function AtribuiIdade(idade) {
//   idade = idade;
// }

// let default_pessoa = _verificaIdade();
// console.log(default_pessoa);

