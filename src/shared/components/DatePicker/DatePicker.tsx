import type React from 'react'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import type { Dayjs } from 'dayjs'
import * as S from './styled'

export interface DatePickerProps {
  label: string
  value: Dayjs | null
  onChange: (value: Dayjs | null) => void
  error?: string
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  error,
}) => {
  const hasError = Boolean(error)

  return (
    <S.Field>
      <S.LabelText>{label}</S.LabelText>
      <S.PickerShell $hasError={hasError}>
        <MuiDatePicker
          value={value}
          onChange={onChange}
          slotProps={{
            textField: {
              error: hasError,
              fullWidth: true,
              helperText: error,
              variant: 'standard',
            },
          }}
        />
      </S.PickerShell>
    </S.Field>
  )
}
