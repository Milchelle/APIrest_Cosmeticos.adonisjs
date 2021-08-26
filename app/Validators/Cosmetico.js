'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Cosmetico extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:45',
      essencia: 'max:25',
      cor: 'max:25',
      milimetros: 'integer|max:10',
      disponivel: 'integer|max:10',
      preco: 'required'
    }
  }
}

module.exports = Cosmetico
