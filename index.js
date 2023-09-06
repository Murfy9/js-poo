import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const conta1 = new ContaCorrente(cliente1, 1001);
conta1.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);

conta1.transferir(200, conta2);

console.log(`Conta: ${cliente1.nome} e Saldo: ${conta1.saldo}`);
console.log(`Conta: ${cliente2.nome} e Saldo: ${conta2.saldo}`);
