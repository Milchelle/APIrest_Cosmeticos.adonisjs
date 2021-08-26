'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cosmetico extends Model {
    static getCamposCadastro(){
        return ['nome', 
        'essencia', 
        'cor', 
        'milimetros', 
        'descricao',
        'disponivel', 
        'preco']
    }
    cosmeticotipo(){
        return this.belongsToMany('App/Models/CosmeticoTipo').pivotTable('cosmetico_tipos')
    }
    lojacosmetico(){
        return this.belongsToMany('App/Models/LojaCosmetico').pivotTable('loja_cosmeticos')
    }
    fornecedorcosmetico(){
        return this.belongsToMany('App/Models/FornecedorCosmetico').pivotTable('fornecedor_cosmeticos')
    }
}

module.exports = Cosmetico
