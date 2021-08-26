'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Fornecedor extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required|max:45'
    }
  }
}

module.exports = Fornecedor
