import { UserEntity } from "../entities/user-entity"
import { Prisma, Account } from '@prisma/client'

export interface AccountRepository {
  create(data: Prisma.AccountCreateInput): Promise<boolean>
  findByDigit(digit: number): Promise<Account | null>
  deposit(digit: number, amount: number): boolean
  withdraw(digit: number, amount: number): boolean
  getBalance(): number
  getUser(): UserEntity
  transfer(target: UserEntity, amount: number): boolean
}
