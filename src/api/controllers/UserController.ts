import { Router } from 'express'
import { getDecorator, postDecorator, deleteDecorator } from '../decorators/http'
import { Route } from '../lib/types'
import { UserModel } from '../models/user'
import { getUserModel } from '../helpers/user'

export class UserController {
  public router = Router()

  public constructor(userModel: UserModel) {
    const constructor: any = this.constructor
    const routes: Route[] = constructor.routes
    routes.forEach(route => {
      this.router[route.method](route.path, route.handler)
    })
  }
  
  @postDecorator('/')
  async createUserAction(req) {
    return await getUserModel().create(req.body)
  }

  @deleteDecorator('/:id')
  async deleteUserAction(req) {
    return await getUserModel().delete(Number(req.params.id))
  }

  @getDecorator('/:id')
  async getSingleUser(req) {
    return await getUserModel().get(Number(req.params.id))
  }

  @getDecorator('/')
  async getAllUsersAction() {
    return await getUserModel().getAll()
  }
}