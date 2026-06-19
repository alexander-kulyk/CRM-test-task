import { NavLink, Outlet } from 'react-router'
import styled from 'styled-components'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Dashboard' },
  { label: 'Inbox' },
  { label: 'Products' },
  { label: 'Invoices' },
  { label: 'Customers' },
  { label: 'Chat Room' },
  { label: 'Calendar', to: '/calendar' },
  { label: 'Help Center' },
  { label: 'Settings' },
] as const

const Shell = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.layout.sidebarWidth} minmax(0, 1fr);
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.appBackground};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.sidebar};
  color: ${({ theme }) => theme.colors.sidebarText};
  padding: ${({ theme }) => theme.spacing.xl} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

const Brand = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  display: block;
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  padding: 0 ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  text-decoration: none;
`

const Navigation = styled.nav`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`

const SidebarLink = styled(NavLink)`
  align-items: center;
  color: ${({ theme }) => theme.colors.sidebarMuted};
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 48px;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  position: relative;
  text-decoration: none;

  &::before {
    background: transparent;
    content: '';
    inset: 0 auto 0 0;
    position: absolute;
    width: 4px;
  }

  &.active,
  &:hover {
    background: ${({ theme }) => theme.colors.sidebarActive};
    color: ${({ theme }) => theme.colors.white};
  }

  &.active::before {
    background: ${({ theme }) => theme.colors.accent};
  }
`

const SidebarItem = styled.span`
  align-items: center;
  color: ${({ theme }) => theme.colors.sidebarMuted};
  display: flex;
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 48px;
  opacity: 0.8;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

const IconMark = styled.span`
  border: 2px solid currentColor;
  border-radius: ${({ theme }) => theme.radii.sm};
  display: inline-block;
  height: 14px;
  opacity: 0.75;
  width: 14px;
`

const Content = styled.div`
  min-width: 0;
`

const Main = styled.main`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.contentMaxWidth};
  padding: ${({ theme }) => theme.spacing.page} ${({ theme }) => theme.spacing.xl} 56px;
`

export function AppLayout() {
  return (
    <Shell>
      <Sidebar>
        <Brand to="/">CRM Test Task</Brand>

        <Navigation aria-label="Primary navigation">
          {navItems.map((item) =>
            'to' in item ? (
              <SidebarLink key={item.label} to={item.to} end={item.to === '/'}>
                <IconMark aria-hidden="true" />
                {item.label}
              </SidebarLink>
            ) : (
              <SidebarItem key={item.label} aria-disabled="true">
                <IconMark aria-hidden="true" />
                {item.label}
              </SidebarItem>
            ),
          )}
        </Navigation>
      </Sidebar>

      <Content>
        <Main>
          <Outlet />
        </Main>
      </Content>
    </Shell>
  )
}
