'use strict'

/*
|--------------------------------------------------------------------------
| CosmeticoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const cosmetico = use('App/Models/Cosmetico')

class CosmeticoSeeder {
  async run () {
    await cosmetico.createMany([
      
    ])
  }
}

module.exports = CosmeticoSeeder
