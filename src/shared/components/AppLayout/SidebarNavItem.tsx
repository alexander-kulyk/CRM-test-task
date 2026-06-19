import type React from 'react'
import type { INavItem } from './constants'
import * as S from './styled'

interface ISidebarNavItemProps {
  item: INavItem
}

export const SidebarNavItem: React.FC<ISidebarNavItemProps> = ({ item }) => {
  if (!item.to) {
    return (
      <S.SidebarItem aria-disabled="true">
        <S.IconMark aria-hidden="true" />
        {item.label}
      </S.SidebarItem>
    )
  }

  return (
    <S.SidebarLink to={item.to} end={item.to === '/'}>
      <S.IconMark aria-hidden="true" />
      {item.label}
    </S.SidebarLink>
  )
}
