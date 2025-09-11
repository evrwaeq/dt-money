import { Home } from '@/screens/Home'
import { createStackNavigator } from '@react-navigation/stack'

type PrivateStackParamsList = {
  Home: undefined
}

const PrivateRoutes = () => {
  const PrivateStack = createStackNavigator<PrivateStackParamsList>()

  return (
    <PrivateStack.Navigator screenOptions={{ headerShown: false }}>
      <PrivateStack.Screen name="Home" component={Home} />
    </PrivateStack.Navigator>
  )
}

export { PrivateRoutes }
