/**
 * Herança Simples - Exemplos
 * 
 * Exercicio 1 - Implemente 1 funcionalidade abstrata para a Pessoa e acesse nas pessoas fisicas e juridicas
 * Execicio 2 - Implemente 1 funcionalidade especifica nas classes de Pessoa Fisica e Pessoa Juridica, para elas.
 */

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  verificaMaioridade(idade) {
    if (idade < 18) {
      console.log('esta pessoa é menor de idade');
    } else {
      console.log('esta pessoa pode beber');
    }
  }

  //exercício 1
  verificaEndereco(endereco) {
    if (endereco) {
      return `O endereço dessa pessoa é: ${endereco}`;
    } else {
      return `Essa pessoa não possui endereço cadastrado.`;
    }
  }


}

class Pfisica extends Pessoa {
  constructor(nome, sobrenome, cpf) {
    super(nome, sobrenome); //usada para acessar o objeto/classe pai
    this.cpf = cpf;
  }

    // segundo exercício
  setProfissao(profissao) {
    return `Profissão: ${profissao}.`;
  }
}

let pessoa = new Pfisica('Maria', 'Ribeiro', '11154545471');
//console.log(pessoa.verificaMaioridade(20));
console.log(pessoa.verificaEndereco('Alameda das Orquídeas, 345'));
console.log(pessoa.setProfissao('Desenvolvedora'))

class PJuridica extends Pessoa {
  constructor(nome, sobrenome, cnpj) {
    super(nome, sobrenome);
    this.cnpj = cnpj;
  }
}

let empresa = new PJuridica('Magalu', 'LTDA', '121321321/0001-10');
console.log(empresa);
console.log(empresa.verificaEndereco());

class PJuridica2 extends Pessoa {
  constructor(nome, sobrenome) {
    super(nome, sobrenome);
  }

  setCnpj(cnpj) {
    this.cnpj = cnpj;
  }

  getCnpj() {
    return this.cnpj;
  }

  // segundo exercício
  setTelefone(telefone) {
    return `Telefone: ${telefone}.`;
  }

}

empresa = new PJuridica2('Magalu', 'LTDA');
empresa.setCnpj('121213212/0001-10');
console.log(empresa.getCnpj());
console.log(empresa.verificaEndereco('Rua das Ostras, 27'));
console.log(empresa.setTelefone('3334-9238'));