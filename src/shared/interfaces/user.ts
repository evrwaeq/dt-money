interface IUser {
  id: number
  name: string
  email: string
  createdAt: Date
  udpatedAt: Date | null
  deletedAt: Date | null
}

export { IUser }
