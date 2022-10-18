import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

export class Conta{
    agencia;
    _saldo = 0;
    _cliente;

    set cliente(novoValor){
        if (novoValor instanceof Cliente) this._cliente = novoValor;
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    constructor (saldo, agencia, cliente){
        this._saldo = saldo;
        this.agencia = agencia;
        this.cliente = cliente;
    }

    sacar(valor){
        // taxa = 1.1 * valor;
        if (this._saldo >= valor) this._saldo -= valor;
        return valor;
    }

    depositar(valor){
        if (valor > 0) this._saldo += valor;
        return valor;
    }

    transferir(valor, conta){
        let valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}