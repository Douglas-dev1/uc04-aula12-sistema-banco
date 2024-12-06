/**
 * Crie um programa que simule as operações de uma conta corrente,
 * onde o cliente deve poder fazer o seguinte:
 * - Consultar saldo,
 * - Fazer um depósito,
 * - Fazer um saque
 * - Imprimir um extrato.
 * Utilize estruturas de dados em memória
 * para armazenar as informações da conta e
 * das operações feitas pela conta.
 */

import Scanner from "@codeea/scanner";

let scanner: Scanner;

type Conta = {
  nomeCliente: string;
  numero: number;
  agencia: number;
  saldo: number;
};

type Transacao = {
  id: string;
  valor: number;
  numeroConta: number;
  agencia: number;
  tipo: TipoTransacao;
  operacao: TipoOperacao;
};

type TipoTransacao = "E" | "S";

type TipoOperacao = "SAQ" | "DEP" | "TRANSF" | "PIX";

const contas: Conta[] = [];
const transacoes: Transacao[] = [];

async function main() {
  let operacao = 0;

  do {
    imprimeMenu();
    operacao = parseInt(await scanner.question("Informe a operação: "));
    if (operacao === 0) {
      console.log("Obrigado por utilizar nossos serviços\n Volte sempre!");
      break;
    }
  } while (true);
}

function imprimeMenu() {
  const menu = `
  1 - CONSULTAR SALDO
  2 - DEPÓSITO
  3 - SACAR
  4 - EXTRATO
  0 - SAIR
  `;
  console.log(menu);
}

function incializarBanco(){
  const conta: Conta = {
    nomeCliente: "Douglas Felipe",
    numero: 1234,
    agencia: 1,
    saldo: 1000
  };

  contas.push(conta);

  const transacao: Transacao = {
    id: "",
    valor: 100,
    numeroConta: conta.numero,
    agencia: conta.agencia,
    tipo: "E",
    operacao: "DEP"
  }

  transacoes.push(transacao)
}

(async () => {
  scanner = new Scanner();
  await main();
  scanner.close();
})();
