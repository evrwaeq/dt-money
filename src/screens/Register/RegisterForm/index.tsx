import { Text, View } from 'react-native'
import { useForm } from 'react-hook-form'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { PublicStackParamsList } from '@/routes/PublicRoutes'
import { AppButton } from '@/components/AppButton'
import { AppInput } from '@/components/AppInput'

interface FormRegisterParams {
  email: string
  name: string
  password: string
  confirmPassword: string
}

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormRegisterParams>()

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>()

  return (
    <>
      <AppInput
        control={control}
        name="name"
        leftIconName="person"
        label="NOME"
        placeholder="Seu nome"
      ></AppInput>

      <AppInput
        control={control}
        name="email"
        leftIconName="mail-outline"
        label="EMAIL"
        placeholder="mail@exemplo.com"
      ></AppInput>

      <AppInput
        control={control}
        name="password"
        leftIconName="lock-outline"
        label="SENHA"
        placeholder="Sua senha"
        secureTextEntry
      ></AppInput>

      <AppInput
        control={control}
        name="confirmPassword"
        leftIconName="lock-outline"
        label="SENHA"
        placeholder="Confirme sua senha"
        secureTextEntry
      ></AppInput>

      <View className="flex-1 justify-between mt-8 mb-6 min-h-[15rem]">
        <AppButton iconName="arrow-forward">Cadastrar</AppButton>
        <View>
          <Text className="mb-3 text-gray-300 text-base">
            Já possui uma conta?
          </Text>
          <AppButton
            mode="outline"
            iconName="arrow-forward"
            onPress={() => navigation.navigate('Login')}
          >
            Acessar
          </AppButton>
        </View>
      </View>
    </>
  )
}

export { RegisterForm }
