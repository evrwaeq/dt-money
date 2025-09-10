import { NavigationRoutes } from '@/routes'
import { AuthContextProvider } from '@/context/auth.context'
import { SnackbarContextProvider } from '@/context/snackbar.contex'
import { Snackbar } from '@/components/SnackBar'
import './src/styles/global.css'

export default function App() {
  return (
    <SnackbarContextProvider>
      <AuthContextProvider>
        <NavigationRoutes />
        <Snackbar />
      </AuthContextProvider>
    </SnackbarContextProvider>
  )
}
