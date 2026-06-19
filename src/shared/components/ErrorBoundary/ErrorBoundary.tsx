//core
import { Component, type ErrorInfo, type ReactNode } from 'react'
//other
import * as S from './styled'

interface IErrorBoundaryProps {
  children: ReactNode
  fallbackMessage?: string
}

interface IErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
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
    console.log(error)
    console.log(errorInfo)
  }

  handleClose = (): void => {
    this.setState({
      hasError: false,
    })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <S.Overlay>
          <S.Card role="alert" aria-label="Error message">
            <S.IconCircle aria-hidden="true">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" fill="currentColor" />
                <path
                  d="M12 7v6"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="16.5" r="1.25" fill="#FFFFFF" />
              </svg>
            </S.IconCircle>

            <S.Title>Something wrong</S.Title>
            <S.Message>
              {this.props.fallbackMessage ?? 'Contact with Admin'}
            </S.Message>

            <S.OkButton type="button" onClick={this.handleClose}>
              Ok
            </S.OkButton>
          </S.Card>
        </S.Overlay>
      )
    }

    return this.props.children
  }
}
