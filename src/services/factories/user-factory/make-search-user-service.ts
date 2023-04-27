import { PrismaUserRepository } from "../../../repositories/prisma/prisma-user-repository";
import { SearchUserService } from "../../user/search-user-service";

export function makeSearchUserService() {
  const userRepository = new PrismaUserRepository()
  const searchUserService = new SearchUserService(userRepository)

  return searchUserService
}