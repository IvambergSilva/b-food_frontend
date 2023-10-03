export const Highlight = {
    purple_light: '#A881E6',
    purple: '#7450AC',
}
export const Base = {
    gray_100: '#FBF9FE',
    gray_200: '#AFABB6',
    gray_300: '#444444',
    gray_400: '#29292d',
    gray_500: '#17171A',
    gray_600: '#0C0C0D',
}

export const Feedback = {
    success: '#24AF53',
}

function createTextStyle(size: string, lineHeight: string, weight: string) {
    return { size, lineHeight, weight }
}

export const PrimaryHeading = createTextStyle('2.4rem', '100%', '700')
export const SecundaryHeading = createTextStyle('1.4rem', '130%', '700')
export const Button = createTextStyle('1.4rem', '130%', '600')
export const Tag = createTextStyle('1.2rem', '130%', '600')
export const Body = createTextStyle('1.2rem', '130%', '400')
