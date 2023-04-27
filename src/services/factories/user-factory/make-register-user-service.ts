import { PrismaUserRepository } from "../../../repositories/prisma/prisma-user-repository";
import { RegisterUserService } from "../../user/register-user-service";

export function makeRegisterUserService() {
  const userRepository = new PrismaUserRepository()
  const registerUserService = new RegisterUserService(userRepository)

  return registerUserService
}