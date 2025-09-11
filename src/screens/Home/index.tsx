import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuthContext } from '@/context/auth.context'
import { AppHeader } from '@/components/AppHeader'

const Home = () => {
  const { handleLogout } = useAuthContext()

  return (
    <SafeAreaView className="flex-1 bg-background-primary">
      <AppHeader />
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export { Home }
