'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cosmeticotipos
 */

const CosmeticoTipo = use('App/Models/CosmeticoTipo')

class CosmeticoTipoController {
  /**
   * Show a list of all cosmeticotipos.
   * GET cosmeticotipos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return CosmeticoTipo.query().paginate(page, perPage)
  }
  

  /**
   * Render a form to be used for creating a new cosmeticotipo.
   * GET cosmeticotipos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new cosmeticotipo.
   * POST cosmeticotipos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = CosmeticoTipo.getCamposCadastro()
    const dados = request.only(campos)
    return await CosmeticoTipo.create(dados)
  }


  /**
   * Display a single cosmeticotipo.
   * GET cosmeticotipos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await CosmeticoTipo.query()
                          .with('cosmetico')
                          .with('tipo')
                          .where('id', params.id)
                          .first()
  }

  /**
   * Render a form to update an existing cosmeticotipo.
   * GET cosmeticotipos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update cosmeticotipo details.
   * PUT or PATCH cosmeticotipos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = CosmeticoTipo.getCamposCadastro()
    const dados = request.only(campos)
    const cosmeticotipo = await CosmeticoTipo.findOrFail(params.id)
    cosmeticotipo.merge(dados)
    await cosmeticotipo.save()
    return cosmeticotipo
  }

  /**
   * Delete a cosmeticotipo with id.
   * DELETE cosmeticotipos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const cosmeticotipo = await CosmeticoTipo.findOrFail(params.id)
    return await cosmeticotipo.delete()
  }
}

module.exports = CosmeticoTipoController
