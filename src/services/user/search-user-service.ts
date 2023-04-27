import { User } from "@prisma/client"
import { UserRepository } from "../../repositories/user-repository"

interface SearchUserServiceRequest {
  email: string
}

interface SearchUserServiceResponse {
  user: User
}

export class SearchUserService {
  constructor(private userRepository: UserRepository) {}

  async executeSearchUserService({
    email,
  }: SearchUserServiceRequest): Promise<SearchUserServiceResponse> {
    const user = await this.userRepository.findByEmail(email)
  
    if (!user) {
      throw new Error()
    }

    return {
      user,
    }
  }
}

