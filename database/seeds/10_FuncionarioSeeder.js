'use strict'

/*
|--------------------------------------------------------------------------
| FuncionarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const funcionario = use('App/Models/Funcionario')

class FuncionarioSeeder {
  async run () {
    await funcionario.createMany([])
    
  }
}

module.exports = FuncionarioSeeder
