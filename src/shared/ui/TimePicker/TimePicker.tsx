//core
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers/TimePicker'
import type { Dayjs } from 'dayjs'
import type React from 'react'
//other
import * as S from './styled'

export interface ITimePickerProps {
  label: string
  value: Dayjs | null
  onChange: (value: Dayjs | null) => void
  error?: string
}

export const TimePicker: React.FC<ITimePickerProps> = ({
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
        <MuiTimePicker
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
