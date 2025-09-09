import { IUser } from '../user'

interface IAuthenticateResponse {
  user: IUser
  token: string
}

export { IAuthenticateResponse }
