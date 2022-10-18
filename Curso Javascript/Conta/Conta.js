import {Cliente} from "../Cliente.js";

//Classes Abstrata (conforme definido no construtor)
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
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente");
        }

        this._saldo = saldo;
        this.agencia = agencia;
        this.cliente = cliente;
    }

    //Método abstrato
    sacar(valor){
        throw new Error("Este metodo é abstrato");
    }

    _sacar(valor){
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