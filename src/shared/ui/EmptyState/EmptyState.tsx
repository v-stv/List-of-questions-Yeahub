import styles from './EmptyState.module.css'
import type { ChildrenProp } from '@/shared/model'

type Props = {
    title?: string
    description?: string
    icon?: ChildrenProp
}

const EmptyState = (props: Props) => {
    const {
        title = 'Ничего не найдено',
        description = 'Попробуйте изменить параметры поиска',
        icon,
    } = props

    return (
        <div className={styles.container}>
            {icon && <div className={styles.icon}>{icon}</div>}
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
        </div>
    )
}

export default EmptyState
