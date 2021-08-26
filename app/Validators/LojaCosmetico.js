'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class LojaCosmetico extends ValidatorAbstract {
  get rules () {
    return {
      loja_id: 'integer|required',
      cosmetico_id: 'integer|required'
    }
  }
}

module.exports = LojaCosmetico
