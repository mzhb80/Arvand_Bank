import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        50: '#EDF1FE',
        100: '#C8D2FC',
        200: '#ADBCFA',
        300: '#879EF8',
        400: '#708BF7',
        500: '#4C6EF5',
        600: '#4564DF',
        700: '#364EAE',
        800: '#2A3D87',
        900: '#202E67',
        950: '#121A3A',
      },
      black: {
        DEFAULT: '#0C0C0C',
      },
      gray: {
        1: '#404040',
        2: '#606060',
        3: '#757575',
        4: '#868686',
        5: '#B1B1B1',
        6: '#CBCBCB',
        7: '#DFDFDF',
        8: '#E3E2E1',
        9: '#EDEDED',
        10: '#F5F5F5',
        11: '#FAFAFA',
      },
      white: {
        DEFAULT: '#FFFFFF',
      },
      error: {
        1: '#AE2E2E',
        2: '#FFECEC',
      },
      success: {
        1: '#00A652',
        2: '#ECFFF3'
      },
      info: {
        1: '#0D6EFD',
        2: '#F3F7FF'
      },
      warning: {
        1: '#BA8803',
        2: '#FFFBEB',
      },
      chart: {
        DEFAULT: '#1ECEE9',
      },
    },
  },
  rules: [
    ['shadow', { 'box-shadow': '0px 4px 5px -2px rgba(0, 0, 0, 0.03)' }]
  ],
  shortcuts: [
    {
      'text-display-1': 'text-64px font-600',
      'text-display-2': 'text-56px font-600',
      'text-heading-1': 'text-44px font-600',
      'text-heading-2': 'text-40px font-600',
      'text-heading-3': 'text-32px font-600',
      'text-heading-4': 'text-24px font-600',
      'text-heading-5': 'text-20px font-600',
      'text-heading-6': 'text-16px font-600',
      'text-body-1': 'text-20px font-400',
      'text-body-2': 'text-18px font-400',
      'text-body-3': 'text-16px font-500',
      'text-body-4': 'text-16px font-400',
      'text-body-5': 'text-14px font-500',
      'text-caption-1': 'text-14px font-600',
      'text-caption-2': 'text-12px font-400',
      'text-button-1': 'text-16px font-400',
      'text-button-2': 'text-14px font-400',
      'text-overline-1': 'text-16px font-400',
      'text-overline-2': 'text-12px font-600',
    },
    [/^s-(.*)$/, ([, s]) => `w-${s} h-${s}`, { layer: 'utilities' }],
  ]
})