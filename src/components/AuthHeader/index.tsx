import { useKeyboardVisible } from '@/shared/hooks/useKeyboardVisible'
import { Image, View } from 'react-native'

const AuthHeader = () => {
  const keyboardIsVisible = useKeyboardVisible()

  if (keyboardIsVisible) return <></>

  return (
    <View className="items-center justify-center w-full min-h-32">
      <Image
        source={require('@/assets/Logo.png')}
        className="h-[3rem] w-[16rem]"
      />
    </View>
  )
}

export { AuthHeader }
