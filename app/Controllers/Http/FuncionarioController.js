'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with funcionarios
 */

const Funcionario = use('App/Models/Funcionario')

class FuncionarioController {
  /**
   * Show a list of all funcionarios.
   * GET funcionarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return Funcionario.query().paginate(page, perPage)
  }
  

  /**
   * Render a form to be used for creating a new funcionario.
   * GET funcionarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new funcionario.
   * POST funcionarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Funcionario.getCamposCadastro()
    const dados = request.only(campos)
    return await Funcionario.create(dados)
  }


  /**
   * Display a single funcionario.
   * GET funcionarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Funcionario.query().with('loja').where('id', params.id).first()
  }

  /**
   * Render a form to update an existing funcionario.
   * GET funcionarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update funcionario details.
   * PUT or PATCH funcionarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = Funcionario.getCamposCadastro()
    const dados = request.only(campos)
    const funcionario = await Funcionario.findOrFail(params.id)
    funcionario.merge(dados)
    await funcionario.save()
    return funcionario
  }

  /**
   * Delete a funcionario with id.
   * DELETE funcionarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const funcionario = await Funcionario.findOrFail(params.id)
    return await funcionario.delete()
  }
}

module.exports = FuncionarioController
