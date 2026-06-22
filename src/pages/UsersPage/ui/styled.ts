//core
import styled from 'styled-components'

export const GridWrapper = styled.div`
  height: 540px;
  width: 100%;

  .MuiDataGrid-root {
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.sizes.md};
  }

  .MuiDataGrid-columnHeader {
    background: ${({ theme }) => theme.colors.surfaceMuted};
  }

  .MuiDataGrid-columnHeaderTitle {
    color: ${({ theme }) => theme.colors.textMuted};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    text-transform: uppercase;
  }

  .MuiDataGrid-cell {
    border-bottom-color: ${({ theme }) => theme.colors.gridLine};
  }

  .MuiDataGrid-row:hover {
    background: ${({ theme }) => theme.colors.surfaceMuted};
  }

  .MuiDataGrid-footerContainer {
    border-top-color: ${({ theme }) => theme.colors.border};
  }
`
