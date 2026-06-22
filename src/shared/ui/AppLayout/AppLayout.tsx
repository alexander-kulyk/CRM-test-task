//core
import type React from 'react'
import { Outlet } from 'react-router'
//components
import { SidebarNavItem } from './SidebarNavItem'
//other
import { NAV_ITEMS } from './constants'
import * as S from './styled'

export const AppLayout: React.FC = () => (
  <S.Shell>
    <S.Sidebar>
      <S.Brand to="/">CRM Test Task</S.Brand>

      <S.Navigation aria-label="Primary navigation">
        {NAV_ITEMS.map((item) => (
          <SidebarNavItem key={item.label} item={item} />
        ))}
      </S.Navigation>
    </S.Sidebar>

    <S.Content>
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Content>
  </S.Shell>
)
