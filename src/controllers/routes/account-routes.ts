import { FastifyInstance } from 'fastify';

export async function accountRoutes(appRoutes: FastifyInstance) {
  appRoutes.post('/deposit', (req, res) => {
    return 123
  })
  
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