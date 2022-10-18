import  {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

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


