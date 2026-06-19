import styled from 'styled-components'

export const ErrorMessage = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.danger};
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  width: 100%;
`
