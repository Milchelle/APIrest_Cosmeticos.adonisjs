'use strict'

/*
|--------------------------------------------------------------------------
| FornecedorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const fornecedor = use('App/Models/Fornecedore')

class FornecedorSeeder {
  async run () {
    await fornecedor.createMany([
      
    ])
  }
}

module.exports = FornecedorSeeder
