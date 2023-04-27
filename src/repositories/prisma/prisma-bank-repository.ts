import { BankRepository } from "../bank-repository";

export class PrismaBankRepository implements BankRepository {
  getAccount(ag: number, digit: number): number {
    throw new Error("Method not implemented.");
  }
  
}