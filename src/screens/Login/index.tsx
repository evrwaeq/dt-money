import { Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { PublicStackParamsList } from '@/routes/PublicRoutes'

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>()

  return (
    <View className="flex-1 items-center justify-center">
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}

export { Login }
