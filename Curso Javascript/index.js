import  {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Conta } from "./Conta/Conta.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Leonardo Hubner", 12345678900);
// cliente1.nome = "Leonardo Hubner";
// cliente1.cpf = 12345678900;

const cliente2 = new Cliente("Reinaldo Hubner", 98765432100);
// cliente2.nome = "Reinaldo Hubner";
// cliente2.cpf = 98765432100;

const contaCorrenteer = new ContaCorrente(1005, cliente1);
const contaCorrenteLeo = new ContaCorrente(1001, cliente1);
//contaCorrenteLeo.cliente = cliente1;

const contaPoupancaRei = new ContaPoupanca(1001, cliente2);
//contaCorrenteRei.cliente = cliente2;

console.log(contaCorrenteLeo.sacar(10));
console.log(contaPoupancaRei.sacar(10));

console.log(contaCorrenteLeo);
console.log(contaPoupancaRei);

console.log(ContaCorrente.numeroContas);
console.log(ContaPoupanca.numeroContas);

//const contaTeste = new Conta(100, 1001, cliente1);

const diretor1 = new Diretor("Leo",1000,12345);
diretor1.cadastrarSenha("123");

console.log(diretor1.autenticar("123"));
console.log(SistemaAutenticacao.login(diretor1, "123"));






