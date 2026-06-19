import type React from 'react'
import { HexColorPicker } from 'react-colorful'
import * as S from './styled'

export interface ColorPickerProps {
  label: string
  value: string
  onChange: (value: string) => void
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  label,
  value,
  onChange,
}) => (
  <S.Field>
    <S.LabelText>{label}</S.LabelText>
    <S.PickerWrapper>
      <HexColorPicker color={value} onChange={onChange} />
    </S.PickerWrapper>
    <S.Preview>
      <S.PreviewBox $color={value} />
      <span>{value}</span>
    </S.Preview>
  </S.Field>
)
