'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Funcionario extends Model {
    static getCamposCadastro(){
        return ['nome', 'cpf', 'email', 'telefone', 'loja_id']
    }
    loja(){
        return this.belongsTo('App/Models/Loja')
    }
}


module.exports = Funcionario
