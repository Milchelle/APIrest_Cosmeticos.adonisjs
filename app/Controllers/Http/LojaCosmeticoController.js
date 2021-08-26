'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with lojacosmeticos
 */

const LojaCosmetico = use('App/Models/LojaCosmetico')

class LojaCosmeticoController {
  /**
   * Show a list of all lojacosmeticos.
   * GET lojacosmeticos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return LojaCosmetico.query().paginate(page, perPage)
  }
  

  /**
   * Render a form to be used for creating a new lojacosmetico.
   * GET lojacosmeticos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new lojacosmetico.
   * POST lojacosmeticos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = LojaCosmetico.getCamposCadastro()
    const dados = request.only(campos)
    return await LojaCosmetico.create(dados)
  }


  /**
   * Display a single lojacosmetico.
   * GET lojacosmeticos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await LojaCosmetico.query()
                          .with('loja')
                          .with('cosmetico')
                          .where('id', params.id)
                          .first()
  }

  /**
   * Render a form to update an existing lojacosmetico.
   * GET lojacosmeticos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update lojacosmetico details.
   * PUT or PATCH lojacosmeticos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = LojaCosmetico.getCamposCadastro()
    const dados = request.only(campos)
    const lojacosmetico = await LojaCosmetico.findOrFail(params.id)
    lojacosmetico.merge(dados)
    await lojacosmetico.save()
    return lojacosmetico
  }

  /**
   * Delete a lojacosmetico with id.
   * DELETE lojacosmeticos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const lojacosmetico = await LojaCosmetico.findOrFail(params.id)
    return await lojacosmetico.delete()
  }
}

module.exports = LojaCosmeticoController
