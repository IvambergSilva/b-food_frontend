export const DarkMode = {
    title: 'dark',
    colors: {
        base: {
            gray_100: '#FBF9FE',
            gray_200: '#AFABB6',
            gray_300: '#444444',
            gray_400: '#17171A',
            gray_500: '#0C0C0D',
        },

        highlight: {
            sereneIndigo: '#629BF6'
        },

        pallete: {
            success: '#3ECC29',
            lightMustard: '#EBC569',
            rustyRed: '#CC3B15',
            brightOrange: '#FF7800'
        }
    }
}

export const LightMode = {
    title: 'light',
    colors: {
        base: {
            gray_100: '#0C0C0D',
            gray_200: '#17171A',
            gray_300: '#444444',
            gray_400: '#F0F0F0',
            gray_500: '#FBF9FE'
        },

        highlight: {
            sereneIndigo: '#90CAF9',
        },

        pallete: {
            success: '#4CAF50',
            lightMustard: '#FFD966',
            rustyRed: '#FF5733',
            brightOrange: '#FFA726',
        }
    }
}

function createTextStyle(size: string, lineHeight: string, weight: string) {
    return { size, lineHeight, weight }
}

export const PrimaryHeading = createTextStyle('2.4rem', '100%', '700')
export const SecundaryHeading = createTextStyle('2.4rem', '130%', '700')
export const TertiaryHeading = createTextStyle('1.8rem', '130%', '600')
export const Paragraph = createTextStyle('1.3rem', '130%', '600')
export const Description = createTextStyle('1rem', '130%', '400')