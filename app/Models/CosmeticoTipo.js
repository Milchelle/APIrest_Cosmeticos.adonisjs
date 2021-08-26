'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CosmeticoTipo extends Model {
    static getCamposCadastro(){
        return ['cosmetico_id', 'tipo_id']
    }
    cosmetico(){
        return this.belongsTo('App/Models/Cosmetico')
    }
    tipo(){
        return this.belongsTo('App/Models/Tipo')
    }
    
}

module.exports = CosmeticoTipo
