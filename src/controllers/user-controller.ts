import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import { registerUserService } from '../services/user/register-user-service'

export async function user(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
		name: z.string(),
    email: z.string().email(),
    document: z.string(),
    phone: z.string(),
	})

  const { name, email, document, phone } = registerBodySchema.parse(request.body)

  try {
    await registerUserService({
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