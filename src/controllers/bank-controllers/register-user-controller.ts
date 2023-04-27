import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeRegisterUserService } from '../../services/factories/user-factory/make-register-user-service'

export async function registerUser(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
		name: z.string(),
    email: z.string().email(),
    document: z.string(),
    phone: z.string(),
	})

  const { name, email, document, phone } = registerBodySchema.parse(request.body)

  try {
    const registerUserService = makeRegisterUserService()

    await registerUserService.executeRegisterUserService({
      name,
      email,
      document,
      phone,
    })
  } catch (err) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}