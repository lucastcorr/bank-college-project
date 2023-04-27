import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function account(req: FastifyRequest, res: FastifyReply) {
  const registerBodySchema = z.object({
		ag: z.number(),
		balance: z.number(),
	})

  const { ag, balance } = registerBodySchema.parse(req.body)

  await prisma.account.create({
    
  })

  return res.send({ message: "The controller is returning" })
}