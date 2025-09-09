import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState
} from 'react'
import { FormLoginParams } from '@/screens/Login/LoginForm'
import { FormRegisterParams } from '@/screens/Register/RegisterForm'
import * as authService from '@/shared/services/dt-money/auth.service'
import { IUser } from '@/shared/interfaces/user'

type AuthContextType = {
  user: IUser | null
  token: string | null
  handleAuthenticate: (params: FormLoginParams) => Promise<void>
  handleRegister: (params: FormRegisterParams) => Promise<void>
  handleLogout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const handleAuthenticate = async (params: FormLoginParams) => {
    const { user, token } = await authService.authenticate(params)
    setUser(user)
    setToken(token)
  }

  const handleRegister = async (params: FormRegisterParams) => {
    const { user, token } = await authService.registerUser(params)
    setUser(user)
    setToken(token)
  }

  const handleLogout = () => {}

  return (
    <AuthContext.Provider
      value={{ user, token, handleAuthenticate, handleRegister, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  const context = useContext(AuthContext)
  return context
}

export { AuthContextProvider, useAuthContext }
