import styles from './SectionSkeleton.module.css'
import { Skeleton } from '@/shared/ui/Skeleton'
import type { SectionType } from '@/shared/model'

type Props = {
    type?: SectionType
    linesCount?: number
}

const SectionSkeleton = (props: Props) => {
    const { type = 'title', linesCount = 3 } = props

    if (type === 'title') {
        return (
            <div className={styles.section}>
                <Skeleton width="80px" height="80px" borderRadius="12px" />
                <div className={styles.titleContent}>
                    <Skeleton width="300px" height="32px" className={styles.mb} />
                    <Skeleton width="250px" height="20px" />
                </div>
            </div>
        )
    }

    return (
        <div className={styles.section}>
            <div className={styles.answerContent}>
                <Skeleton width="150px" height="24px" className={styles.mb} />
                <div className={styles.textContent}>
                    {Array.from({ length: linesCount }).map((_, index) => (
                        <Skeleton
                            key={index}
                            width={index === linesCount - 1 ? '80%' : '100%'}
                            height="16px"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionSkeleton
