import { NavLink } from 'react-router'
import styled from 'styled-components'

export const Shell = styled.div`
  display: grid;
  grid-template-columns: ${({ theme }) => theme.layout.sidebarWidth} minmax(0, 1fr);
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.appBackground};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.sidebar};
  color: ${({ theme }) => theme.colors.sidebarText};
  padding: ${({ theme }) => theme.spacing.xl} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

export const Brand = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  display: block;
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  padding: 0 ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  text-decoration: none;
`

export const Navigation = styled.nav`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const SidebarLink = styled(NavLink)`
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

export const SidebarItem = styled.span`
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

export const IconMark = styled.span`
  border: 2px solid currentColor;
  border-radius: ${({ theme }) => theme.radii.sm};
  display: inline-block;
  height: 14px;
  opacity: 0.75;
  width: 14px;
`

export const Content = styled.div`
  min-width: 0;
`

export const Main = styled.main`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.contentMaxWidth};
  padding: ${({ theme }) => theme.spacing.page} ${({ theme }) => theme.spacing.xl} 56px;
`
