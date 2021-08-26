'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CosmeticoTipoSchema extends Schema {
  up () {
    this.create('cosmetico_tipos', (table) => {
      table.increments()
      table.integer('cosmetico_id').references('id').inTable('Cosmeticos').unsigned().notNullable()
      table.integer('tipo_id').references('id').inTable('Tipos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cosmetico_tipos')
  }
}

module.exports = CosmeticoTipoSchema
