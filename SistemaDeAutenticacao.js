export class SistemaDeAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaDeAutenticacao.eAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static eAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
