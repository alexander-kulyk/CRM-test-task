//core
import { Component, type ErrorInfo, type ReactNode } from 'react'
import type React from 'react'
//other
import { useErrorContext } from '../../context'

interface IErrorBoundaryInnerProps {
  children: ReactNode
  onError: (message: string) => void
  fallback?: ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundaryInner extends Component<
  IErrorBoundaryInnerProps,
  IErrorBoundaryState
> {
  state: IErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError(): IErrorBoundaryState {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.props.onError(error.message || 'Something went wrong')
    console.error(error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback ?? null
    }

    return this.props.children
  }
}

interface IErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

export const ErrorBoundary: React.FC<IErrorBoundaryProps> = ({
  children,
  fallback,
}) => {
  const { addError } = useErrorContext()

  return (
    <ErrorBoundaryInner onError={addError} fallback={fallback}>
      {children}
    </ErrorBoundaryInner>
  )
}
