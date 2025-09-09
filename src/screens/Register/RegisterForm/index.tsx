import { Text, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'
import { PublicStackParamsList } from '@/routes/PublicRoutes'
import { useAuthContext } from '@/context/auth.context'
import { AppButton } from '@/components/AppButton'
import { AppInput } from '@/components/AppInput'
import { schema } from './schema'

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
  } = useForm<FormRegisterParams>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: ''
    },
    resolver: yupResolver(schema)
  })

  const { handleRegister } = useAuthContext()

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>()

  const onSubmit = async (userData: FormRegisterParams) => {
    try {
      await handleRegister(userData)
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error.response?.data)
      }
    }
  }

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
        <AppButton iconName="arrow-forward" onPress={handleSubmit(onSubmit)}>
          Cadastrar
        </AppButton>
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

export { RegisterForm, FormRegisterParams }
