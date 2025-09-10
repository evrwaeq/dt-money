import { NavigationRoutes } from '@/routes'
import { AuthContextProvider } from '@/context/auth.context'
import { SnackbarContextProvider } from '@/context/snackbar.contex'
import './src/styles/global.css'

export default function App() {
  return (
    <SnackbarContextProvider>
      <AuthContextProvider>
        <NavigationRoutes />
      </AuthContextProvider>
    </SnackbarContextProvider>
  )
}
