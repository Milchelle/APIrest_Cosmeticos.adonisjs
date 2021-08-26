'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with cosmeticos
 */

const Cosmetico = use('App/Models/Cosmetico')

class CosmeticoController {
  /**
   * Show a list of all cosmeticos.
   * GET cosmeticos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return Cosmetico.query().paginate(page, perPage)
  }
  

  /**
   * Render a form to be used for creating a new cosmetico.
   * GET cosmeticos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new cosmetico.
   * POST cosmeticos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Cosmetico.getCamposCadastro()
    const dados = request.only(campos)
    return await Cosmetico.create(dados)
  }


  /**
   * Display a single cosmetico.
   * GET cosmeticos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Cosmetico.query()
                          .where('id', params.id)
                          .first()
  }

  /**
   * Render a form to update an existing cosmetico.
   * GET cosmeticos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update cosmetico details.
   * PUT or PATCH cosmeticos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = Cosmetico.getCamposCadastro()
    const dados = request.only(campos)
    const cosmetico = await Cosmetico.findOrFail(params.id)
    cosmetico.merge(dados)
    await cosmetico.save()
    return cosmetico
  }

  /**
   * Delete a cosmetico with id.
   * DELETE cosmeticos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const cosmetico = await Cosmetico.findOrFail(params.id)
    return await cosmetico.delete()
  }
}

module.exports = CosmeticoController
