export interface INavItem {
  label: string;
  to?: string;
}

export const NAV_ITEMS: INavItem[] = [
  { label: 'Calendar', to: '/' },
  { label: 'Analytics', to: '/analytics' },
  { label: 'Users', to: '/users' },
];
