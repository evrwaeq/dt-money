import { NavigationRoutes } from '@/routes'
import { AuthContextProvider } from '@/context/auth.context'
import { SnackbarContextProvider } from '@/context/snackbar.contex'
import { BottomSheetProvider } from '@/context/bottomsheet.context'
import { Snackbar } from '@/components/SnackBar'
import './src/styles/global.css'

export default function App() {
  return (
    <SnackbarContextProvider>
      <AuthContextProvider>
        <BottomSheetProvider>
          <NavigationRoutes />
          <Snackbar />
        </BottomSheetProvider>
      </AuthContextProvider>
    </SnackbarContextProvider>
  )
}
