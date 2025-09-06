import { View } from 'react-native'
import { DismissKeyboardView } from '@/components/DismissKeyboardView'
import { AuthHeader } from '@/components/AuthHeader'
import { LoginForm } from './LoginForm'

const Login = () => {
  return (
    <DismissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AuthHeader />
        <LoginForm />
      </View>
    </DismissKeyboardView>
  )
}

export { Login }
