import { prisma } from "../../lib/prisma"

interface CreateAccountServiceRequest {
  ag: number
}

export async function createAccountService({
  ag,
}: CreateAccountServiceRequest) {
  const emailAlreadyExists = prisma.account
}