'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class LojaCosmetico extends Model {
    static getCamposCadastro(){
        return ['loja_id', 'cosmetico_id']
    }
    loja(){
        return this.belongsTo('App/Models/Loja')
    }
    cosmetico(){
        return this.belongsTo('App/Models/Cosmetico')
    }
}

module.exports = LojaCosmetico
