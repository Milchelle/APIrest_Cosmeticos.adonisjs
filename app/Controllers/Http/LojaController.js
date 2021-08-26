'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with lojas
 */

const Loja = use('App/Models/Loja')

class LojaController {
  /**
   * Show a list of all lojas.
   * GET lojas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return Loja.query().paginate(page, perPage)
  }
  

  /**
   * Render a form to be used for creating a new loja.
   * GET lojas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new loja.
   * POST lojas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Loja.getCamposCadastro()
    const dados = request.only(campos)
    return await Loja.create(dados)
  }


  /**
   * Display a single loja.
   * GET lojas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Loja.query().with('funcionarios').with('lojacosmetico').where('id', params.id).first()
  }

  /**
   * Render a form to update an existing loja.
   * GET lojas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update loja details.
   * PUT or PATCH lojas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const campos = Loja.getCamposCadastro()
    const dados = request.only(campos)
    const loja = await Loja.findOrFail(params.id)
    loja.merge(dados)
    await loja.save()
    return loja
  }

  /**
   * Delete a loja with id.
   * DELETE lojas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const loja = await Loja.findOrFail(params.id)
    return await loja.delete()
  }
}

module.exports = LojaController
