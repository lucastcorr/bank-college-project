import { FastifyInstance } from 'fastify';
import { registerUser } from '../user-controllers/register-user-controller';

export async function userRoutes(appRoutes: FastifyInstance) {
  appRoutes.post('/register', registerUser)
  
  appRoutes.post('/withdraw', (req, res) => {
    return 123
  })
  
  appRoutes.get('/balance', (req, res) => {
    return 123
  })
  
  appRoutes.get('/user', (req, res) => {
    return 123
  })
  
  appRoutes.post('/transfer', (req, res) => {
    return 123
  })
  
}