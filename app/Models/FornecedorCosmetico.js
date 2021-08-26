'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FornecedorCosmetico extends Model {
    static getCamposCadastro(){
        return ['fornecedor_id', 'cosmetico_id']
    }
    cosmetico(){
        return this.belongsTo('App/Models/Cosmetico')
    }
    fornecedor(){
        return this.belongsTo('App/Models/Fornecedore')
    }
}


module.exports = FornecedorCosmetico
