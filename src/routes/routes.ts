import express from 'express'
import { accountRoutes } from './account-routes'
import { bankRoutes } from './bank-routes'
import { userRoutes } from './user-routes'

export const routes = express.Router()

routes.use('/account', accountRoutes)
routes.use('/bank', bankRoutes)
routes.use('/user', userRoutes)