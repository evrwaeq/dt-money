import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '@/screens/Login'
import { Register } from '@/screens/Register'

type PublicStackParamsList = {
  Login: undefined
  Register: undefined
}

const NavigationRoutes = () => {
  const PublicStack = createStackNavigator<PublicStackParamsList>()

  return (
    <NavigationContainer>
      <PublicStack.Navigator screenOptions={{ headerShown: false }}>
        <PublicStack.Screen name="Login" component={Login} />
        <PublicStack.Screen name="Register" component={Register} />
      </PublicStack.Navigator>
    </NavigationContainer>
  )
}

export { NavigationRoutes, PublicStackParamsList }
