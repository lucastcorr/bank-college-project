import { BankRepository } from "../repositories/bank-repository"

interface AccountInterface {
  name: string
  bacen: number
}

export class BankEntity implements BankRepository {
  name: string
  bacen: number

  constructor(data: AccountInterface) {
    this.name = data.name
    this.bacen = data.bacen
  }

  getAccount(ag: number, digit: number) {
    // Account search logic
    const account = 123
    return account
  }
}