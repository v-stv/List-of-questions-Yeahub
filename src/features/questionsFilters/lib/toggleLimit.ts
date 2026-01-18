export const toggleLimit = (currentLimit: number, defaultLimit: number, maxLimit: number) => {
    return currentLimit === defaultLimit ? maxLimit : defaultLimit
}
