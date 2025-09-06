import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/shared/colors'
import { useRef, useState } from 'react'
import clsx from 'clsx'

interface AppInputParams<T extends FieldValues> extends TextInputProps {
  control: Control<T>
  name: Path<T>
  leftIconName?: keyof typeof MaterialIcons.glyphMap
  label?: string
}

const AppInput = <T extends FieldValues>({
  control,
  name,
  leftIconName,
  label,
  ...rest
}: AppInputParams<T>) => {
  const [isFocused, setIsFocuses] = useState<boolean>(false)
  const inputRef = useRef<TextInput>(null)

  const checkFocus = () => {
    if (inputRef.current) {
      setIsFocuses(inputRef.current.isFocused())
    }
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View className="w-full mt-4">
          {label && (
            <Text
              className={clsx(
                'mb-2 mt-3 text-base',
                isFocused ? 'text-accent-brand' : 'text-gray-600'
              )}
            >
              {label}
            </Text>
          )}

          <TouchableOpacity className="flex-row items-center justify-between border-b-[1px] border-gray-600 px-3 py-2 h-16">
            {leftIconName && (
              <MaterialIcons
                name={leftIconName}
                color={isFocused ? colors['accent-brand'] : colors.gray[600]}
                size={24}
                className="mr-2"
              />
            )}
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholderTextColor={colors.gray[700]}
              className="flex-1 text-base text-gray-500"
              ref={inputRef}
              onFocus={checkFocus}
              onEndEditing={checkFocus}
              {...rest}
            />
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

export { AppInput }
