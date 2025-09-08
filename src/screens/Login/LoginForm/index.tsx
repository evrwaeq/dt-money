import { Text, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { PublicStackParamsList } from '@/routes/PublicRoutes'
import { AppInput } from '@/components/AppInput'
import { AppButton } from '@/components/AppButton'
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

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>()

  const onSubmit = async () => {}

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
          Login
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
