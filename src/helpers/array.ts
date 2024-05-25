export const sum = (numbers: number[]) => {
    return numbers.reduce((acc, value) => acc + value, 0);
}