import { PrismaAccountRepository } from "../../../repositories/prisma/prisma-account-repository";
import { GetBalanceService } from "../../account/get-balance-service";

export function makeGetBalanceService() {
  const accountRepository = new PrismaAccountRepository()
  const getBalanceService = new GetBalanceService(accountRepository)

  return getBalanceService
}