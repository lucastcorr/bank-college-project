import { AccountRepository } from "../../repositories/account-repository";
import { Decimal } from "@prisma/client/runtime";

interface GetBalanceServiceRequest {
  digit: number
}

interface GetBalanceServiceResponse {
  balance: Decimal
}

export class GetBalanceService {
  constructor(private accountRepository: AccountRepository) {}

  async executeGetBalanceService({
    digit,
  }: GetBalanceServiceRequest): Promise<GetBalanceServiceResponse> {
    const userAccount = await this.accountRepository.getBalance(digit)
    
    if (!userAccount) {
      throw new Error()
    }

    const balance = userAccount.balance

    return {
      balance
    }
  }
}