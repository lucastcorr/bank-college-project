import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"
import { makeGetBalanceService } from "../../services/factories/account-factory/make-search-user-service"

export async function getBalance(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    digit: z.number(),
	})

  const { digit } = registerBodySchema.parse(request.body)

  try {
    const getBalanceService = makeGetBalanceService()

    await getBalanceService.executeGetBalanceService({
      digit,
    })
  } catch (err) {
    return reply.status(409).send()
  }

  return reply.status(201).send()
}