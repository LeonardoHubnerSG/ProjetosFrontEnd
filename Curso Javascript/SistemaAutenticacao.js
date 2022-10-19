/*
Objeto será autenticável se ele possuir o método autenticar
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if (auntenticavel.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}