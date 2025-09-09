import { Text, TouchableOpacity, View } from 'react-native'
import { useAuthContext } from '@/context/auth.context'

const Home = () => {
  const { handleLogout } = useAuthContext()

  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

export { Home }
