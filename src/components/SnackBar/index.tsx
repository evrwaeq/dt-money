import { Text, View } from 'react-native'
import { useSnackbarContext } from '@/context/snackbar.contex'

const Snackbar = () => {
  const { message, type } = useSnackbarContext()

  if (!message || !type) {
    return <></>
  }

  const bgColor = `${type === 'SUCCESS' ? 'bg-accent-brand-background-primary' : 'bg-accent-red-background-primary'}`

  return (
    <View
      className={`absolute bottom-10 self-center w-[90%] h-[3.125rem] rounded-xl ${bgColor} justify-center z-10 p-2`}
    >
      <Text className="text-white text-base font-bold">{message}</Text>
    </View>
  )
}

export { Snackbar }
