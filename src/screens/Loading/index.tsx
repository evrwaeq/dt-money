import { useAuthContext } from '@/context/auth.context'
import { colors } from '@/shared/colors'
import { FC, useEffect } from 'react'
import { ActivityIndicator, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface LoadingProps {
  setLoading: (value: boolean) => void
}

const Loading: FC<LoadingProps> = ({ setLoading }) => {
  const { restoreUserSession, handleLogout } = useAuthContext()

  useEffect(() => {
    ;(async () => {
      try {
        const user = await restoreUserSession()
        if (!user) {
          await handleLogout()
        }
      } catch (error) {
        await handleLogout()
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  return (
    <SafeAreaView className="bg-background-primary items-center justify-center flex-1">
      <>
        <Image
          className="h-[3rem] w-[16rem]"
          source={require('@/assets/Logo.png')}
        />
        <ActivityIndicator color={colors.white} className="mt-20" />
      </>
    </SafeAreaView>
  )
}

export { Loading }
