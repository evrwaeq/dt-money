import { ActivityIndicator, Text, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { PublicStackParamsList } from '@/routes/PublicRoutes'
import { useAuthContext } from '@/context/auth.context'
import { AppInput } from '@/components/AppInput'
import { AppButton } from '@/components/AppButton'
import { useErrorHandler } from '@/shared/hooks/useErrorHandler'
import { colors } from '@/shared/colors'
import { schema } from './schema'

interface FormLoginParams {
  email: string
  password: string
}

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<FormLoginParams>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  })

  const { handleAuthenticate } = useAuthContext()
  const { handleError } = useErrorHandler()

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>()

  const onSubmit = async (params: FormLoginParams) => {
    try {
      await handleAuthenticate(params)
    } catch (error) {
      handleError(error, 'Falha ao logar')
    }
  }

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
        <AppButton iconName="arrow-forward" onPress={handleSubmit(onSubmit)}>
          {isSubmitting ? <ActivityIndicator color={colors.white} /> : 'Login'}
        </AppButton>
        <View>
          <Text className="mb-3 text-gray-300 text-base">
            Ainda não possui uma conta?
          </Text>
          <AppButton
            mode="outline"
            iconName="arrow-forward"
            onPress={() => navigation.navigate('Register')}
          >
            Cadastro
          </AppButton>
        </View>
      </View>
    </>
  )
}

export { LoginForm, FormLoginParams }
