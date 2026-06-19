import { useEffect, useState } from 'react'
import { calendarDb } from './calendarDb'

export interface UseInitDatabaseResult {
  isInitializing: boolean
  error: Error | null
}

export const useInitDatabase = (): UseInitDatabaseResult => {
  const [isInitializing, setIsInitializing] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const initDatabase = async (): Promise<void> => {
      try {
        await calendarDb.open()
      } catch (initError) {
        console.log(initError)
        setError(
          initError instanceof Error
            ? initError
            : new Error('Database initialization failed'),
        )
      } finally {
        setIsInitializing(false)
      }
    }

    void initDatabase()
  }, [])

  return {
    isInitializing,
    error,
  }
}
