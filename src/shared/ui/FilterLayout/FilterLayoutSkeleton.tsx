import styles from './FilterLayout.module.css'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'

type Props = {
    title: string
    count?: number
}

const FilterLayoutSkeleton = (props: Props) => {
    const { title, count = 5 } = props

    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>{title}</p>
            <div className={styles.list}>
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} className={styles.itemBtn}>
                        <Skeleton width="80px" height="20px" borderRadius="4px" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterLayoutSkeleton
