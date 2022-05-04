/** 1) escreva uma função (arrow function) que irá receber os parâmetros cpf, data de nascimento e cep (todos em string)
 * e sem formatação, formate-os com regex e exiba no console
 */

 const dados = (cpf, birthDate, zipCode) => {
  let cpfOnlyDigits = cpf.replace(/\D/g, "");
  const cpfValidation = cpfOnlyDigits.match(/^\d{11}$/);

  let dateOnlyDigits = birthDate.replace(/\D/g, "");
  const birthDateValidation = dateOnlyDigits.match(/^\d{8}$/);

  let zipCodeOnlyDigits = zipCode.replace(/\D/g, "");
  const zipCodeValidation = zipCodeOnlyDigits.match(/^\d{8}$/);

  return `${cpfValidation}, ${birthDateValidation}, ${zipCodeValidation}`;
};

console.log(dados("123.456.789-00", "03/08/1995", "37472-000"))
console.log(dados("12345678900", "03081995", "37472000"))


/**  
 * 2) Dado o objeto person, extraia cada propriedade com destructuring
 */
const person = {
  firstName: "Jhon",
  lastName: "Doe",
};
let { firstName, lastName } = person;
console.log(firstName, lastName);


/** 3) Dado o objeto person2, extraia os dados pessoais de John e todo restante (endereço) em uma variável
 * chamada endereco, ao final desse exercício, você deve ter apenas 4 variáveis
 */

const person2 = {
  firstName2: "John",
  lastName2: "Doe",
  age: 30,
  country: "Brazil",
  city: "São Paulo",
  state: "SP",
  postalCode: "01001001",
  neighbohur: "Centro",
};

let { firstName2, lastName2, age, ...adress } = person2;
console.log(firstName, lastName, age, adress);
