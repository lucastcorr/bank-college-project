import { prisma } from "../../lib/prisma"
import { AccountRepository } from "../account-repository"

export class PrismaAccountRepository implements AccountRepository {
  async getBalance(digit: number) {
    const userAccount = await prisma.account.findUnique({
      where: {
        digit,
      },
    })

    return userAccount
  }
}