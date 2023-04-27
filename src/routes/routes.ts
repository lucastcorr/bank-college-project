import { FastifyInstance} from 'fastify'
import { accountRoutes } from './account-routes'
import { bankRoutes } from './bank-routes'
import { userRoutes } from './user-routes'

export async function appRoutes(app: FastifyInstance) {

  app.register(accountRoutes)
  app.register(bankRoutes)
  app.register(userRoutes)
}