'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Fornecedore extends Model {
    static getCamposCadastro(){
        return ['nome']
    }
    fornecedorcosmetico(){
        return this.belongsToMany('App/Models/FornecedorCosmetico').pivotTable('fornecedor_cosmeticos')
    }
}

module.exports = Fornecedore
