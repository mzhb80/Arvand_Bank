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
        }
    }
})