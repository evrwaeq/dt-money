import { useCallback } from 'react'
import { SystemBars } from 'react-native-edge-to-edge'
import { NavigationContainer } from '@react-navigation/native'
import { useAuthContext } from '@/context/auth.context'
import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'

const NavigationRoutes = () => {
  const { user, token } = useAuthContext()

  const Routes = useCallback(() => {
    if (!user || !token) {
      return <PublicRoutes />
    } else {
      return <PrivateRoutes />
    }
  }, [user, token])

  return (
    <NavigationContainer>
      <SystemBars style={'light'} />
      <Routes />
    </NavigationContainer>
  )
}

export { NavigationRoutes }
