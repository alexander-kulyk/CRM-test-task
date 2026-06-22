//core
import type React from 'react'
//other
import type { INavItem } from './constants'
import * as S from './styled'

interface ISidebarNavItemProps {
  item: INavItem
}

export const SidebarNavItem: React.FC<ISidebarNavItemProps> = ({ item }) => {
  if (!item.to) {
    return (
      <S.SidebarItem aria-disabled="true">
        {item.label}
      </S.SidebarItem>
    )
  }

  return (
    <S.SidebarLink to={item.to} end={item.to === '/'}>
      {item.label}
    </S.SidebarLink>
  )
}
