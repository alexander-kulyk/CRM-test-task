export const theme = {
  colors: {
    appBackground: '#F0F2F8',
    surface: '#FFFFFF',
    surfaceMuted: '#F5F6FA',
    text: '#4D4F5C',
    textStrong: '#43425D',
    textMuted: '#A3A6B4',
    border: '#E8E9F1',
    gridLine: '#F1F2F7',
    sidebar: '#43425D',
    sidebarActive: '#3B3A54',
    sidebarText: '#E9E9F3',
    sidebarMuted: '#A5A4BF',
    accent: '#A3A0FB',
    primary: '#3B86FF',
    primaryHover: '#2F74DE',
    danger: '#FF6565',
    successBackground: '#E8F7EE',
    successText: '#2B8A4B',
    white: '#FFFFFF',
  },
  typography: {
    fontFamily:
      "'Roboto', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      xs: '12px',
      sm: '13px',
      md: '14px',
      lg: '16px',
      xl: '20px',
      pageTitle: '28px',
      stat: '32px',
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    page: '40px',
  },
  radii: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    pill: '999px',
  },
  shadows: {
    panel: '0 2px 8px rgba(67, 66, 93, 0.08)',
    popover: '0 8px 24px rgba(67, 66, 93, 0.22)',
  },
  layout: {
    sidebarWidth: '248px',
    contentMaxWidth: '1120px',
  },
  breakpoints: {
    tablet: '900px',
    mobile: '640px',
  },
} as const

export type AppTheme = typeof theme
