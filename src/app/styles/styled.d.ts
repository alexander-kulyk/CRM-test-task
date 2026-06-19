import 'styled-components'
import type { AppTheme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: AppTheme['colors']
    typography: AppTheme['typography']
    spacing: AppTheme['spacing']
    radii: AppTheme['radii']
    shadows: AppTheme['shadows']
    layout: AppTheme['layout']
    breakpoints: AppTheme['breakpoints']
  }
}
