import express from 'express'
import { routes } from './routes/routes'
import { PrismaClient } from '@prisma/client'

const app = express()

export const prisma = new PrismaClient()

app.use('/', routes)

app.listen(3000, () => {
  console.log('...Server Running! 🚀')
})

module.exports = app
