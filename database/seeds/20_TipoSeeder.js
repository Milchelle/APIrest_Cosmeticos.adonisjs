'use strict'

/*
|--------------------------------------------------------------------------
| TipoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const tipo = use('App/Models/Tipo')

class TipoSeeder {
  async run () {
    await tipo.createMany([])
  }
}

module.exports = TipoSeeder
