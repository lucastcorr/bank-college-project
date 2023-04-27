import { PrismaBankRepository } from "../../../repositories/prisma/prisma-bank-repository"
import { RegisterUserService } from "../../user/register-user-service"

export function makeRegisterUserService() {
  const bankRepository = new PrismaBankRepository()
  const registerUserService = new RegisterUserService(bankRepository)

  return registerUserService
}