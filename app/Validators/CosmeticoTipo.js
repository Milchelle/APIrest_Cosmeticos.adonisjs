'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class CosmeticoTipo extends ValidatorAbstract {
  get rules () {
    return {
      cosmetico_id: 'integer|required',
      tipo_id: 'integer|required'
    }
  }
}

module.exports = CosmeticoTipo
