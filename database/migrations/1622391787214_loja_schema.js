'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LojaSchema extends Schema {
  up () {
    this.create('lojas', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.string('endereco', 70).notNullable()
      table.string('email', 140)
      table.string('telefone', 13)
      table.timestamps()
    })
  }

  down () {
    this.drop('lojas')
  }
}

module.exports = LojaSchema
