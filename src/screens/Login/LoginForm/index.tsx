import { useForm } from 'react-hook-form'
import { AppInput } from '@/components/AppInput'

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
    </>
  )
}

export { LoginForm }
