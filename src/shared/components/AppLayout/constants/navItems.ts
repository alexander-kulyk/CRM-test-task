export interface INavItem {
  label: string
  to?: string
}

export const NAV_ITEMS: INavItem[] = [
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
]
