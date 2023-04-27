import { User } from "@prisma/client"
import { BankRepository } from "../../repositories/bank-repository"

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
  constructor(private bankRepository: BankRepository) {}

  async executeRegisterUserService({
    name,
    email,
    document,
    phone,
  }: RegisterUserServiceRequest): Promise<RegisterUserServiceResponse> {
    const emailAlreadyExists = await this.bankRepository.findByEmail(email)
  
    if (emailAlreadyExists) {
      throw new Error()
    }
  
    const user = await this.bankRepository.create({
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

