import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

interface FormLoginParams {
  email: string
  password: string
}

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormLoginParams>()

  return (
    <View>
      <Text className="text-white">login form</Text>
    </View>
  )
}

export { LoginForm }
