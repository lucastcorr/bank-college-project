import { FastifyInstance} from 'fastify'
import { registerUser } from '../user-controllers/register-user-controller'
import { searchUser } from '../bank-controllers/search-user-controller'

export async function appRoutes(app: FastifyInstance) {
  // BANK ROUTES
  app.post('/user', registerUser)
  app.get('/user', searchUser)

  // USER ROUTES
  // app.post('/create', registerUser)

  // ACCOUNT ROUTES
  // app.post('/create', registerUser)

}