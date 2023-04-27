import { Account } from "@prisma/client";

export interface AccountRepository {
  getBalance(digit: number): Promise<Account | null>
}
