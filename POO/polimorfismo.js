/**
 * Polimorfismo - Exemplos
 *
 * Exercicio 1 - Quero que vocês tentem dar novas funcionalidades para a conta poupança.
 */
class Conta {
  constructor(numero, titular) {
    this.numero = numero;
    this.titular = titular;
    this.saldo = 0;
  }

  deposita(valor) {
    this.saldo += valor;
  }

  saque(valor) {
    if (this.saldo > 0 && this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Saque não é permitido");
    }
  }

  getSaldo() {
    return this.saldo;
  }
}

class ContaCorrente extends Conta {
  constructor(numero, titular) {
    super(numero, titular);
  }

  deposita(valor) {
    this.valor += valor - 1;
  }
}

class ContaPoupanca extends Conta {
  constructor(numero, titular) {
    super(numero, titular);
  }

  transferencia(contaCorrente) {
    if (this.numero === contaCorrente.numero) {
      return `custo 0`;
    } else {
      return `custo 10`;
    }
  }
}

let conta = new ContaPoupanca(120939238, "Isis");
let conta2 = new ContaPoupanca(34535423, "Rara");
console.log(conta.transferencia(conta));
console.log(conta.transferencia(conta2));

// let jose = new ContaCorrente(321, 'Jose Jr');
// console.log('OBJETO', jose);
// jose.deposita(200);
// jose.saque(50);
// jose.deposita(100);
// console.log(jose.getSaldo());
