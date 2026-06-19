/* eslint-disable react-refresh/only-export-components -- ErrorContext colocates the context, its ErrorProvider, and the useErrorContext hook by design; this module is not a Fast Refresh component boundary. */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import type React from 'react'

export interface AppError {
  id: string
  message: string
  occurredAt: string
}

interface ErrorContextValue {
  errors: AppError[]
  addError: (message: string) => void
  removeError: (id: string) => void
  clearErrors: () => void
}

const ErrorContext = createContext<ErrorContextValue | null>(null)

export const ErrorProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [errors, setErrors] = useState<AppError[]>([])

  const addError = useCallback((message: string) => {
    setErrors((currentErrors) => [
      ...currentErrors,
      {
        id: crypto.randomUUID(),
        message,
        occurredAt: new Date().toISOString(),
      },
    ])
  }, [])

  const removeError = useCallback((id: string) => {
    setErrors((currentErrors) =>
      currentErrors.filter((error) => error.id !== id),
    )
  }, [])

  const clearErrors = useCallback(() => {
    setErrors([])
  }, [])

  const value = useMemo(
    () => ({
      errors,
      addError,
      removeError,
      clearErrors,
    }),
    [addError, clearErrors, errors, removeError],
  )

  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
}

export const useErrorContext = (): ErrorContextValue => {
  const context = useContext(ErrorContext)

  if (!context) {
    throw new Error('useErrorContext must be used within ErrorProvider')
  }

  return context
}
