import { prisma } from "../../lib/prisma"
import { UserRepository } from "../../repositories/user-repository"

interface RegisterUserServiceRequest {
  name: string
  email: string
  document: string
  phone: string
}

export class RegisterUserService {
  constructor(private userRepository: UserRepository) {}

  async executeRegisterUserService({
    name,
    email,
    document,
    phone,
  }: RegisterUserServiceRequest) {
    const emailAlreadyExists = await this.userRepository.findByEmail(email)
  
    if (emailAlreadyExists) {
      throw new Error()
    }
  
    await this.userRepository.create({
        name,
        email,
        document,
        phone,
        // Still doesn't have password
      },
    )
  }
}

