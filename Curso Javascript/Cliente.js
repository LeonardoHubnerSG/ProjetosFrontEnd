export class Cliente{
    constructor(nome, cpf,){
        this.nome = nome;
        this._cpf = cpf;
    }

    autenticar(senha){
        return this._senha == senha;
    }
}