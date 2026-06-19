import styled from 'styled-components'

export const Field = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const LabelText = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`

export const PickerWrapper = styled.div`
  .react-colorful {
    height: 132px;
    width: 100%;
  }

  .react-colorful__saturation {
    border-bottom: 0;
    border-radius: ${({ theme }) => theme.radii.md} ${({ theme }) => theme.radii.md}
      0 0;
  }

  .react-colorful__hue {
    border-radius: 0 0 ${({ theme }) => theme.radii.md} ${({ theme }) => theme.radii.md};
    height: 14px;
  }

  .react-colorful__pointer {
    border: 2px solid ${({ theme }) => theme.colors.white};
    height: 18px;
    width: 18px;
  }
`

export const Preview = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  gap: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
`

export const PreviewBox = styled.span<{ $color: string }>`
  background: ${({ $color }) => $color};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  display: inline-block;
  height: 18px;
  width: 18px;
`
