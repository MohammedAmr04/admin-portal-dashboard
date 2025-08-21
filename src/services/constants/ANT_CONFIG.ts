import { type ThemeConfig, theme } from 'antd'
import { MAIN_COLORS } from './COLORS'

const MAIN_THEME_TOKEN: ThemeConfig['token'] = {
  borderRadius: 8,
  borderRadiusLG: 8,
  borderRadiusOuter: 8,
  // fontFamily: var(--antd-font),
  fontSize: 14,
  fontSizeXL: 16,
  controlHeight: 34,
  controlHeightLG: 51,
}

export const ANTD_THEME: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: MAIN_COLORS.light.primary,
    colorBgBase: MAIN_COLORS.light.background,
    colorTextBase: MAIN_COLORS.light.text + 'b6',
    colorBorder: MAIN_COLORS.light.border,
    colorBgElevated: MAIN_COLORS.light.elevated,
    ...MAIN_THEME_TOKEN,
  },
  components: {
    Segmented: {
      trackBg: MAIN_COLORS.light.card,
    },
    Form: {
      labelFontSize: 18,
    },
  },
}
export const ANTD_THEME_DARK: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: MAIN_COLORS.dark.primary,
    colorBgBase: MAIN_COLORS.dark.background,
    colorTextBase: MAIN_COLORS.dark.text + 'b6',
    colorBorder: MAIN_COLORS.dark.border,
    colorBgElevated: MAIN_COLORS.dark.elevated,

    ...MAIN_THEME_TOKEN,
  },
  components: {
    Segmented: {
      trackBg: MAIN_COLORS.dark.card,
    },
    Form: {
      labelFontSize: 18,
    },
  },
}
