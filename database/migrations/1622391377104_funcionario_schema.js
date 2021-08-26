'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncionarioSchema extends Schema {
  up () {
    this.create('funcionarios', (table) => {
      table.increments()
      table.string('nome', 45).notNullable()
      table.string('cpf', 11).notNullable()
      table.string('email', 140)
      table.string('telefone', 13)
      table.integer('loja_id').references('id').inTable('Lojas').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('funcionarios')
  }
}

module.exports = FuncionarioSchema
