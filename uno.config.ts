import type { CSSEntries } from 'unocss'
import { defineConfig, entriesToCss, presetAttributify, presetIcons, presetUno } from 'unocss'

import presetRemToPx from '@unocss/preset-rem-to-px'

import { kebabCase } from 'lodash-es'

import { iconNames } from './src/assets/icons'
import { colorCssVar, colorTheme } from './src/assets/theme'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      prefix: ['i-'],
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],

  shortcuts: [
    {
      'wh-full': 'w-full h-full',
      'flex-center': 'flex justify-center items-center',
      'icon-btn': 'p-6 flex-center cursor-pointer rounded-4 hover:bg-#eaf0f1',
    },
    [/^border-([rltb])$/, ([,c]) => `border-${c}-1 border-${c}-#efeff5 border-${c}-solid`],
  ],

  safelist: iconNames.flatMap(icon => `i-${icon} i-${icon}?mask`.split(' ')),

  theme: {
    colors: colorCssVar,
  },

  preflights: [{
    getCSS: () => {
      const entriesColors: CSSEntries = Object.entries(colorTheme.common!).map(([name, value]) => [`--${kebabCase(name)}`, value])
      return `:root {${entriesToCss(entriesColors)}}`
    },
  }],
})
