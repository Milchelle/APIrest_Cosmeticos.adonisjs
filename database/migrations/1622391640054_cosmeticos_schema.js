'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CosmeticosSchema extends Schema {
  up () {
    this.create('cosmeticos', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.string('essencia', 25)
      table.string('cor', 25)
      table.integer('milimetros').unsigned()
      table.string('descricao')
      table.integer('disponivel').unsigned()
      table.string('preco').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cosmeticos')
  }
}

module.exports = CosmeticosSchema
