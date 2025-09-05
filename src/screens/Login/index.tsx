import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { PublicStackParamsList } from '@/routes/PublicRoutes'
import { DismissKeyboardView } from '@/components/DismissKeyboardView'

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>()

  return (
    <DismissKeyboardView>
      <Text>Login</Text>
      <TextInput className="bg-gray-500 w-full" />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </DismissKeyboardView>
  )
}

export { Login }
