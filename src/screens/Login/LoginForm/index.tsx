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
        label="email"
        placeholder="mail@example.com"
      />
    </>
  )
}

export { LoginForm }
