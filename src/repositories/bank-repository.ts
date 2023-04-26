import { AccountEntity } from "../entities/account-entity";

export interface BankRepository {
  getAccount(ag: number, digit: number): number // Need to be changed for AccountEntity in the future
}