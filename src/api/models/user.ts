import { User } from '../lib/types'

export class UserModel {
  public users: User[] = [
    {
      id: 1, 
      name: "Vadim"
    }
  ]

  public async get(id: number): Promise<User> {
    return this.users.find(u => u.id === id)
  }

  public async create(userInfo: User): Promise<User> {
    this.users.push(userInfo)
    return userInfo
  }

  public async delete(id: number): Promise<boolean> {
    const index = this.users.findIndex(u => u.id === id)
    if (index !== -1) {
      this.users.splice(index, 1)
      return true
    } else {
      return false
    }
  }

  public async getAll(): Promise<User[]> {
    return this.users
  }
}