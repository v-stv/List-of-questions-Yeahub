import styles from './SpecializationsFilter.module.css'
import { FilterLayoutSkeleton } from '@/shared/ui/FilterLayout'
import { Skeleton } from '@/shared/ui/Skeleton'

const SpecializationsFilterSkeleton = () => {
    return (
        <>
            <FilterLayoutSkeleton title="Специализация" count={5} />
            <div className={styles.button}>
                <Skeleton width="100px" height="20px" borderRadius="4px" />
            </div>
        </>
    )
}

export default SpecializationsFilterSkeleton
