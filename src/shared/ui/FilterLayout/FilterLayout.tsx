import styles from './FilterLayout.module.css'
import { useDispatch } from 'react-redux'
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { Chip, type ChipType } from '@/shared/ui/Chip'
import type { ChildrenProp } from '@/shared/model'

type Props<T, TPayload = number> = {
    title: string
    items: T[]
    renderItem: (item: T) => ChildrenProp
    type?: ChipType
    getId?: (item: T) => TPayload
    selectItemsId?: TPayload[]
    action: ActionCreatorWithPayload<TPayload>
    onItemClick?: (value: TPayload) => void
}

const FilterLayout = <T, TPayload = number>(props: Props<T, TPayload>) => {
    const {
        title,
        items,
        renderItem,
        getId,
        type = 'button',
        selectItemsId,
        action,
        onItemClick,
    } = props

    const dispatch = useDispatch()

    const handleClick = (value: TPayload) => {
        if (onItemClick) {
            onItemClick(value)
        } else {
            dispatch(action(value))
        }
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{title}</p>
            <div className={styles.list}>
                {items.map((item) => {
                    const id = getId ? getId(item) : (item as unknown as TPayload)
                    const isSelected = selectItemsId?.includes(id)
                    const currentClassName =
                        type === 'button'
                            ? `${styles.itemBtn} ${isSelected ? styles.active : ''}`.trim()
                            : `${styles.itemLink} ${isSelected ? styles.active : ''}`.trim()

                    return (
                        <Chip
                            key={String(id)}
                            variant={type}
                            className={currentClassName}
                            onClick={() => handleClick(id)}
                        >
                            {renderItem(item)}
                        </Chip>
                    )
                })}
            </div>
        </div>
    )
}

export default FilterLayout
