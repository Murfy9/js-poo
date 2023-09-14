import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

// Contas

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaCorrente);
console.log(contaPoupanca);
console.log(contaSalario);

// Funcionarios

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha(123456789);
const gerente = new Gerente("Ana", 5000, 1237895601);
gerente.cadastrarSenha(1234);

const estaLogado = SistemaDeAutenticacao.login(cliente1, 123456789);
console.log(estaLogado);
