import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroContas = 0;
    // agencia;
    // _saldo = 0;
    // _cliente;

    constructor (agencia, cliente){
        super(100, agencia, cliente)
        ContaCorrente.numeroContas ++;
    }

    sacar(valor){
        let taxa = valor * 0.1;
        valor += taxa;
        return super._sacar(valor);
    }
}