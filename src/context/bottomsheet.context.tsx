import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useState
} from 'react'

interface BottomSheetContextType {
  openBottomSheet: (content: React.ReactNode, index: number) => void
  closeBottomSheet: () => void
}

const BottomSheetContext = createContext({} as BottomSheetContextType)

const BottomSheetProvider: FC<PropsWithChildren> = ({ children }) => {
  const [content, setContent] = useState<React.ReactNode | null>(null)

  const openBottomSheet = useCallback(
    (newContent: React.ReactNode, index: number) => {
      setContent(newContent)
    },
    []
  )

  const closeBottomSheet = useCallback(() => {
    setContent(null)
  }, [])

  return (
    <BottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet }}>
      {children}
    </BottomSheetContext.Provider>
  )
}

export { BottomSheetProvider }
