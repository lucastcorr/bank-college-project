import { AccountRepository } from "../repositories/account-repository"
import { BankEntity } from "./bank-entity"
import { UserEntity } from "./user-entity"

interface AccountInterface {
  balance: number
  ag: number
  digit: number
  createdAt: Date
  user: UserEntity
  bank: BankEntity
}

export class AccountEntity implements AccountRepository {
  balance: number
  ag: number
  digit: number
  createdAt: Date
  user: UserEntity
  bank: BankEntity
  
  constructor(data: AccountInterface) {
    this.balance = data.balance
    this.ag = data.ag
    this.digit = data.digit
    this.createdAt = data.createdAt
    this.user = data.user
    this.bank = data.bank
  }

  deposit(amount: number) {
    const depositSucceed = (() => {
      if (amount > 0) {
        return true
      }

      return false
    })

    if (!depositSucceed) {
      throw new Error()
    }

    this.balance += amount

    return true
  }

  withdraw(amount: number) {
    const withdrawSucceed = (() => {
      if (this.balance - amount >= 0) {
        return true
      }

      return false
    })

    if (!withdrawSucceed) {
      throw new Error()
    }

    this.balance -= amount

    return true
  }

  getBalance() {
    return this.balance
  }

  transfer(target: UserEntity, amount: number) {
    const enoughFunds = (() => {
      if (amount > this.balance) {
        return false
      }

      return true
    })

    if (!enoughFunds) {
      throw new Error()
    }

    // Make transfer

    return true
  }

  getUser() {
      return this.user
  }

}