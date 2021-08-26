'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FornecedorCosmeticoSchema extends Schema {
  up () {
    this.create('fornecedor_cosmeticos', (table) => {
      table.increments()
      table.integer('fornecedor_id').references('id').inTable('Fornecedores').unsigned().notNullable()
      table.integer('cosmetico_id').references('id').inTable('Cosmeticos').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('fornecedor_cosmeticos')
  }
}

module.exports = FornecedorCosmeticoSchema
