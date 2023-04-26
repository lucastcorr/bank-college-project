interface UserInterface {
  name: string
  document: string
  phone: string
  email: string
}

export class UserEntity {
  name: string
  document: string
  phone: string
  email: string

  constructor(data: UserInterface) {
    this.name = data.name
    this.document = data.document
    this.phone = data.phone
    this.email = data.email
  }
}