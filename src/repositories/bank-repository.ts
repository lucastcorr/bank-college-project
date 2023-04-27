import { Prisma, User } from "@prisma/client";

export interface BankRepository {
  create(data: Prisma.UserCreateInput): Promise<User>
  findByEmail(email: string): Promise<User | null>
}