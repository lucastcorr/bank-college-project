import { User } from "@prisma/client"
import { UserRepository } from "../../repositories/user-repository"

interface RegisterUserServiceRequest {
  name: string
  email: string
  document: string
  phone: string
}

interface RegisterUserServiceResponse {
  user: User
}

export class RegisterUserService {
  constructor(private userRepository: UserRepository) {}

  async executeRegisterUserService({
    name,
    email,
    document,
    phone,
  }: RegisterUserServiceRequest): Promise<RegisterUserServiceResponse> {
    const emailAlreadyExists = await this.userRepository.findByEmail(email)
  
    if (emailAlreadyExists) {
      throw new Error()
    }
  
    const user = await this.userRepository.create({
        name,
        email,
        document,
        phone,
        // Still doesn't have password
      },
    )

    return {
      user,
    }
  }
}

