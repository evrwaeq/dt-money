import { View } from 'react-native'
import { DismissKeyboardView } from '@/components/DismissKeyboardView'
import { AuthHeader } from '@/components/AuthHeader'
import { RegisterForm } from './RegisterForm'

const Register = () => {
  return (
    <DismissKeyboardView>
      <View className="flex-1 w-[82%] self-center">
        <AuthHeader />
        <RegisterForm />
      </View>
    </DismissKeyboardView>
  )
}

export { Register }
