'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with fornecedorcosmeticos
 */

const FornecedorCosmetico = use('App/Models/FornecedorCosmetico')

class FornecedorCosmeticoController {
  /**
   * Show a list of all fornecedorcosmeticos.
   * GET fornecedorcosmeticos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return FornecedorCosmetico.query().paginate(page, perPage)
  }
  

  /**
   * Render a form to be used for creating a new fornecedorcosmetico.
   * GET fornecedorcosmeticos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new fornecedorcosmetico.
   * POST fornecedorcosmeticos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = FornecedorCosmetico.getCamposCadastro()
    const dados = request.only(campos)
    return await FornecedorCosmetico.create(dados)
  }


  /**
   * Display a single fornecedorcosmetico.
   * GET fornecedorcosmeticos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await FornecedorCosmetico.query()
                          .with('fornecedor')
                          .with('cosmetico')
                          .where('id', params.id)
                          .first()
  }

  /**
   * Render a form to update an existing fornecedorcosmetico.
   * GET fornecedorcosmeticos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update fornecedorcosmetico details.
   * PUT or PATCH fornecedorcosmeticos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = FornecedorCosmetico.getCamposCadastro()
    const dados = request.only(campos)
    const fornecedorcosmetico = await FornecedorCosmetico.findOrFail(params.id)
    fornecedorcosmetico.merge(dados)
    await fornecedorcosmetico.save()
    return fornecedorcosmetico
  }

  /**
   * Delete a fornecedorcosmetico with id.
   * DELETE fornecedorcosmeticos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const fornecedorcosmetico = await FornecedorCosmetico.findOrFail(params.id)
    return await fornecedorcosmetico.delete()
  }
}

module.exports = FornecedorCosmeticoController
