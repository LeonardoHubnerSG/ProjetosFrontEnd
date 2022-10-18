import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario{
    constructor(nome, salario, cpf){
        super(nome, salario, cpf);
        this._bonificacao = 1.1;
    }

    cadastrarSenha(senha){
        super.cadastrarSenha(senha);
    }
}