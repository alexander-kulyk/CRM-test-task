import type React from 'react'
import { useErrorContext } from '../../context'
import * as S from './styled'

export const ErrorMessage: React.FC = () => {
  const { errors, removeError } = useErrorContext()

  if (errors.length === 0) {
    return null
  }

  return (
    <S.Overlay>
      {errors.map((error) => (
        <S.Card key={error.id} role="alert" aria-label="Error message">
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
          <S.Message>{error.message}</S.Message>

          <S.OkButton type="button" onClick={() => removeError(error.id)}>
            Ok
          </S.OkButton>
        </S.Card>
      ))}
    </S.Overlay>
  )
}
