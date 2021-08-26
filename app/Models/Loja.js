'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Loja extends Model {
    static getCamposCadastro(){
        return ['nome', 
        'endereco', 
        'email', 
        'telefone']
    }
    funcionarios(){
        return this.hasMany('App/Models/Funcionario')
    }
    lojacosmetico(){
        return this.belongsToMany('App/Models/LojaCosmetico').pivotTable('loja_cosmeticos')
    }
}

module.exports = Loja
