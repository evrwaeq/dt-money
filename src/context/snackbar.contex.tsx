import { createContext, FC, PropsWithChildren, useState } from 'react'

type SnackbarMessageType = 'ERROR' | 'SUCCESS'

interface NotifyMessageParams {
  message: string
  messageType: SnackbarMessageType
}

type SnackbarContextType = {
  message: string | null
  type: SnackbarMessageType | null
  notify: (params: NotifyMessageParams) => void
}

const SnackbarContext = createContext({} as SnackbarContextType)

const SnackbarContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null)
  const [type, setType] = useState<SnackbarMessageType | null>(null)

  const notify = (params: NotifyMessageParams) => {
    setMessage(params.message)
    setType(params.messageType)
    setTimeout(() => {
      setMessage(null)
      setType(null)
    }, 3000)
  }

  return (
    <SnackbarContext.Provider value={{ message, type, notify }}>
      {children}
    </SnackbarContext.Provider>
  )
}

export { SnackbarContextProvider }
