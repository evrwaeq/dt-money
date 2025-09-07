import { useForm } from 'react-hook-form'
import { AppInput } from '@/components/AppInput'
import { AppButton } from '@/components/AppButton'
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
    <>
      <AppInput
        control={control}
        name="email"
        label="EMAIL"
        placeholder="mail@examplo.com"
        leftIconName="mail-outline"
      />

      <AppInput
        control={control}
        name="password"
        label="SENHA"
        placeholder="Sua senha"
        leftIconName="lock-outline"
        secureTextEntry
      />

      <View className="flex-1 justify-between mt-8 mb-6 min-h-[15rem]">
        <AppButton iconName="arrow-forward">Login</AppButton>
        <View>
          <Text className="mb-3 text-gray-300 text-base">
            Ainda não possui uma conta?
          </Text>
          <AppButton mode="outline" iconName="arrow-forward">
            Cadastro
          </AppButton>
        </View>
      </View>
    </>
  )
}

export { LoginForm }
