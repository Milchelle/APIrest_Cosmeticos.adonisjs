'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class FornecedorCosmetico extends ValidatorAbstract {
  get rules () {
    return {
      fornecedor_id: 'integer|required',
      cosmetico_id: 'integer|required'
    }
  }
}

module.exports = FornecedorCosmetico
