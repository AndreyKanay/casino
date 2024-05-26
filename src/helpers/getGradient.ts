export const getGradient = (id: number): string => {
    return `url(#gradient_${id})`
}

export const getRandomGradient = (): string => {
    return `url(#gradient_${(Math.floor(Math.random() * (10 + 1)))})`
}

