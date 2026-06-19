import { useEffect, useState } from 'react'
import { useErrorContext } from '../../../shared/context'
import { calendarDb } from './calendarDb'

export interface UseInitDatabaseResult {
  isInitializing: boolean
}

export const useInitDatabase = (): UseInitDatabaseResult => {
  const [isInitializing, setIsInitializing] = useState(true)
  const { addError } = useErrorContext()

  useEffect(() => {
    const initDatabase = async (): Promise<void> => {
      try {
        await calendarDb.open()
      } catch (error) {
        console.log(error)
        addError('Failed to initialize calendar database.')
      } finally {
        setIsInitializing(false)
      }
    }

    void initDatabase()
  }, [addError])

  return {
    isInitializing,
  }
}
