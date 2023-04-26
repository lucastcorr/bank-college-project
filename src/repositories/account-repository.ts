import { UserEntity } from "../entities/user-entity"

export interface AccountRepository {
  deposit(amount: number): boolean
  withdraw(amount: number): boolean
  getBalance(): number
  getUser(): UserEntity
  transfer(target: UserEntity, amount: number): boolean
}