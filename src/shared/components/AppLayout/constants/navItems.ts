export interface INavItem {
  label: string;
  to?: string;
}

export const NAV_ITEMS: INavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Calendar', to: '/calendar' },
];
