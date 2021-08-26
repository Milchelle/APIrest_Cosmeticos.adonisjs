'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LojaCosmeticoSchema extends Schema {
  up () {
    this.create('loja_cosmeticos', (table) => {
      table.increments()
      table.integer('loja_id').references('id').inTable('Lojas').unsigned().notNullable()
      table.integer('cosmetico_id').references('id').inTable('Cosmeticos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('loja_cosmeticos')
  }
}

module.exports = LojaCosmeticoSchema
