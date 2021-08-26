'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Loja extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:45',
      endereco: 'required|max:70',
      email: 'email|max:140',
      telefone: 'min:9|max:13',
    }
  }
}

module.exports = Loja
