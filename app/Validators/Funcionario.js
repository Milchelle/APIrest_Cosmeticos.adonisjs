'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Funcionario extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:45',
      cpf: 'required| min:11|max:11',
      email: 'email|max:140',
      telefone: 'min:9|max:13',
      loja_id: 'integer|required'
    }
  }
}

module.exports = Funcionario
