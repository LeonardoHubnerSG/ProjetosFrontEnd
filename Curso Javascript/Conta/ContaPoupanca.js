import {Conta} from "./Conta.js";

export class ContaPoupanca extends Conta{
    static numeroContas = 0;
    // agencia;
    // _saldo = 0;
    // _cliente;

    constructor (agencia, cliente){
        super(100, agencia, cliente)
        ContaPoupanca.numeroContas ++;
    }

    sacar(valor){
        let taxa = valor * 0.05;
        valor += taxa;
        return super._sacar(valor);
    }
}