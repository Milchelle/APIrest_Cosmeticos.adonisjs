'use strict'

/*
|--------------------------------------------------------------------------
| LojaCosmeticoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const lojacosmetico = use('App/Models/LojaCosmetico')

class LojaCosmeticoSeeder {
  async run () {
    await lojacosmetico.createMany([
      
    ])
  }
}

module.exports = LojaCosmeticoSeeder
