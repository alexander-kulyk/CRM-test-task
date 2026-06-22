//core
import React, { type InputHTMLAttributes } from 'react'
//other
import * as S from './styled'

export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string
  value: string
  onChange: (value: string) => void
  minLength?: number
  maxLength?: number
  error?: string
}

export const Input: React.FC<IInputProps> = ({
  label,
  value,
  onChange,
  minLength,
  maxLength,
  error,
  ...inputProps
}) => {
  const isTooLong = maxLength !== undefined && value.length > maxLength
  const isTooShort =
    minLength !== undefined && value.length > 0 && value.length < minLength

  const localError = isTooLong
    ? `Maximum number of characters is ${maxLength}`
    : isTooShort
      ? `Minimum number of characters is ${minLength}`
      : ''
  const fieldError = error || localError
  const hasError = Boolean(fieldError)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(event.target.value)
  }

  return (
    <S.Field>
      <S.LabelText>{label}</S.LabelText>
      <S.Control
        {...inputProps}
        value={value}
        onChange={handleChange}
        $hasError={hasError}
      />
      {fieldError && <S.ErrorText>{fieldError}</S.ErrorText>}
    </S.Field>
  )
}
