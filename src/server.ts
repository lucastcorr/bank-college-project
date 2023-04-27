import fastify from 'fastify'
import { appRoutes } from './controllers/routes/routes'

export const app = fastify()

app.register(appRoutes)

app.listen({
	host: '0.0.0.0',
	port: 3000,
}).then(() => {
	console.log('HTTP Server Running!🚀')
})

module.exports = app
