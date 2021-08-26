'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/users', 'UserController').apiOnly()
Route.post('/token', 'UserController.token')

Route.group(()=>{
  Route.resource('/cosmeticos', 'CosmeticoController')
                            .apiOnly()
                            .validator(new Map([
                            [['store', 'update'], 'Cosmetico']
                            ]))
Route.resource('/cosmetico-tipos', 'CosmeticoTipoController')
                            .apiOnly()
                            .validator(new Map([
                            [['store', 'update'], 'CosmeticoTipo']
                            ]))
Route.resource('/fornecedor-cosmeticos', 'FornecedorCosmeticoController')
                            .apiOnly()
                            .validator(new Map([
                            [['store', 'update'], 'FornecedorCosmetico']
                            ]))
Route.resource('/fornecedores', 'FornecedoreController')
                            .apiOnly()
                            .validator(new Map([
                            [['store', 'update'], 'Fornecedor']
                            ]))
Route.resource('/funcionarios', 'FuncionarioController')
                            .apiOnly()
                            .validator(new Map([
                            [['store', 'update'], 'Funcionario']
                            ]))
Route.resource('/lojas', 'LojaController')
                            .apiOnly()
                            .validator(new Map([
                            [['store', 'update'], 'Loja']
                            ]))
Route.resource('/loja-cosmeticos', 'LojaCosmeticoController')
                            .apiOnly()
                            .validator(new Map([
                            [['store', 'update'], 'LojaCosmetico']
                            ]))
Route.resource('/tipos', 'TipoController')
                            .apiOnly()
                            .validator(new Map([
                            [['store', 'update'], 'Tipo']
                            ]))
}).middleware('auth')