export const getId = <T extends { id: number | string }>(item: T): T['id'] => {
    return item.id
}
