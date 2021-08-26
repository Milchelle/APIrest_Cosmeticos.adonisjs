'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with fornecedors
 */

const Fornecedor = use('App/Models/Fornecedore')

class FornecedorController {
  /**
   * Show a list of all fornecedors.
   * GET fornecedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return Fornecedor.query().paginate(page, perPage)
  }
  

  /**
   * Render a form to be used for creating a new fornecedor.
   * GET fornecedors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new fornecedor.
   * POST fornecedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Fornecedor.getCamposCadastro()
    const dados = request.only(campos)
    return await Fornecedor.create(dados)
  }


  /**
   * Display a single fornecedor.
   * GET fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Fornecedor.query()
                          .with('fornecedorcosmetico')
                          .where('id', params.id)
                          .first()
  }

  /**
   * Render a form to update an existing fornecedor.
   * GET fornecedors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update fornecedor details.
   * PUT or PATCH fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = Fornecedor.getCamposCadastro()
    const dados = request.only(campos)
    const fornecedor = await Fornecedor.findOrFail(params.id)
    fornecedor.merge(dados)
    await fornecedor.save()
    return fornecedor
  }

  /**
   * Delete a fornecedor with id.
   * DELETE fornecedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const fornecedor = await Fornecedor.findOrFail(params.id)
    return await fornecedor.delete()
  }
}

module.exports = FornecedorController
