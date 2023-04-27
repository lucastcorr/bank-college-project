
import { PrismaBankRepository } from "../../../repositories/prisma/prisma-bank-repository"
import { SearchUserService } from "../../bank/search-user-service"


export function makeSearchUserService() {
  const bankRepository = new PrismaBankRepository()
  const searchUserService = new SearchUserService(bankRepository)

  return searchUserService
}