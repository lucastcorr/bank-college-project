import { User } from "@prisma/client"
import { BankRepository } from "../../repositories/bank-repository"

interface SearchUserServiceRequest {
  email: string
}

interface SearchUserServiceResponse {
  user: User
}

export class SearchUserService {
  constructor(private bankRepository: BankRepository) {}

  async executeSearchUserService({
    email,
  }: SearchUserServiceRequest): Promise<SearchUserServiceResponse> {
    const user = await this.bankRepository.findByEmail(email)
  
    if (!user) {
      throw new Error()
    }

    return {
      user,
    }
  }
}

