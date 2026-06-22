//core
import type React from 'react'
import { DataGrid } from '@mui/x-data-grid'
//other
import { USERS, USER_COLUMNS } from '../config'
import * as S from './styled'

const PAGE_SIZE_OPTIONS = [5, 10]
const INITIAL_STATE = {
  pagination: { paginationModel: { pageSize: 10, page: 0 } },
}

export const UsersTable: React.FC = () => (
  <S.GridWrapper>
    <DataGrid
      rows={USERS}
      columns={USER_COLUMNS}
      initialState={INITIAL_STATE}
      pageSizeOptions={PAGE_SIZE_OPTIONS}
      disableRowSelectionOnClick
      disableColumnMenu
    />
  </S.GridWrapper>
)
