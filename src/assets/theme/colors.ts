import type { GlobalThemeOverrides } from 'naive-ui'

export const colorTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: '#316C72FF',
    primaryColorHover: '#316C72E3',
    primaryColorPressed: '#2B4C59FF',
    primaryColorSuppl: '#316C72E3',

    infoColor: '#2080F0FF',
    infoColorHover: '#4098FCFF',
    infoColorPressed: '#1060C9FF',
    infoColorSuppl: '#4098FCFF',

    successColor: '#18A058FF',
    successColorHover: '#36AD6AFF',
    successColorPressed: '#0C7A43FF',
    successColorSuppl: '#36AD6AFF',

    warningColor: '#F0A020FF',
    warningColorHover: '#FCB040FF',
    warningColorPressed: '#C97C10FF',
    warningColorSuppl: '#FCB040FF',

    errorColor: '#D03050FF',
    errorColorHover: '#DE576DFF',
    errorColorPressed: '#AB1F3FFF',
    errorColorSuppl: '#DE576DFF',
  },
}

export const colorCssVar = {
  primary: {
    DEFAULT: 'var(--primary-color)',
    base: 'var(--primary-color)',
    hover: 'var(--primary-color-hover)',
    pressed: 'var(--primary-color-pressed)',
    suppl: 'var(--primary-color-suppl)',
  },
  info: {
    DEFAULT: 'var(--info-color)',
    base: 'var(--info-color)',
    hover: 'var(--info-color-hover)',
    pressed: 'var(--info-color-pressed)',
    suppl: 'var(--info-color-suppl)',
  },
  success: {
    DEFAULT: 'var(--success-color)',
    base: 'var(--success-color)',
    hover: 'var(--success-color-hover)',
    pressed: 'var(--success-color-pressed)',
    suppl: 'var(--success-color-suppl)',
  },
  warning: {
    DEFAULT: 'var(--warning-color)',
    base: 'var(--warning-color)',
    hover: 'var(--warning-color-hover)',
    pressed: 'var(--warning-color-pressed)',
    suppl: 'var(--warning-color-suppl)',
  },
  error: {
    DEFAULT: 'var(--error-color)',
    base: 'var(--error-color)',
    hover: 'var(--error-color-hover)',
    pressed: 'var(--error-color-pressed)',
    suppl: 'var(--error-color-suppl)',
  },
}
