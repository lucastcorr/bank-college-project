import { prisma } from "../../lib/prisma"
import { Prisma } from '@prisma/client'
import { AccountRepository } from "../account-repository"

export class PrismaAccountRepository implements AccountRepository {
  async create(data: Prisma.AccountCreateInput) {
    await prisma.account.create({
      data,
    })

    return true
  }

  async findByDigit(digit: number) {
    const account = await prisma.account.findUnique({
      where: {
        digit,
      },
    })
  
    return account
  }

  async deposit(digit: number, amount: ) {
    throw new Error("Method not implemented.");
  }

  async withdraw(amount: number) {
    throw new Error("Method not implemented.");
  }

  async getBalance() {
    throw new Error("Method not implemented.");
  }

  async getUser() {
    throw new Error("Method not implemented.");
  }

  async transfer(target: UserEntity, amount: number) {
    throw new Error("Method not implemented.");
  }
  
}