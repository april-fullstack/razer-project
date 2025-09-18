import localFont from 'next/font/local';

export const montserrat = localFont({
    src: [
        { path: '../../public/fonts/montserrat-bold_0.ttf', weight: '700', style: 'normal' },
        { path: '../../public/fonts/Montserrat-Bold_1.ttf', weight: '700', style: 'italic' },
        { path: '../../public/fonts/montserrat-hairline_0.ttf', weight: '100', style: 'normal' },
        { path: '../../public/fonts/montserrat-light_0.ttf', weight: '300', style: 'italic' },
        { path: '../../public/fonts/montserrat-light_1.ttf', weight: '300', style: 'normal' },
        { path: '../../public/fonts/montserrat-regular_2.ttf', weight: '400', style: 'normal' },
    ],
    variable: '--font-montserrat',
    display: 'swap',
})