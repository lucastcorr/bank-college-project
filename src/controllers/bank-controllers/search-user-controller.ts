import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeSearchUserService } from '../../services/factories/user-factory/make-search-user-service'

export async function registerUser(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    email: z.string().email(),
	})

  const { email } = registerBodySchema.parse(request.body)

  try {
    const searchUserService = makeSearchUserService()

    await searchUserService.executeSearchUserService({
      email,
    })
  } catch (err) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}