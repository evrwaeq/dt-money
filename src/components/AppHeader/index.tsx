import { Image, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useAuthContext } from '@/context/auth.context'
import { colors } from '@/shared/colors'

const AppHeader = () => {
  const { handleLogout } = useAuthContext()

  return (
    <View className="w-full flex-row p-8 justify-between">
      <View>
        <Image
          source={require('@/assets/Logo.png')}
          className="w-[8.125rem] h-[1.875rem]"
        />

        <TouchableOpacity
          className="flex-row items-center gap-2 mt-2"
          onPress={handleLogout}
        >
          <MaterialIcons name="logout" color={colors.gray[700]} size={15} />
          <Text className="text-gray-700 text-balance">Sair da conta</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="bg-accent-brand w-[9.375rem] h-[3.2rem] items-center justify-center rounded-xl">
        <Text className="text-white font-bold text-sm">Nova transação</Text>
      </TouchableOpacity>
    </View>
  )
}

export { AppHeader }
