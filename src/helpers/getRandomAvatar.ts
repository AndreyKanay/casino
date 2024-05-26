export const getRandomAvatar = (): string => {
    return `https://i.pravatar.cc/60?u=${String(+Date.now() + Math.random())}`
}