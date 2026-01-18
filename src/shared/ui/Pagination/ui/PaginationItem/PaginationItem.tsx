import styles from './PaginationItem.module.css'
import { Dots } from '@/shared/model'
import Button from '@/shared/ui/Button/ui/Button'

type Props = {
    index: number
    page: number | Dots
    currentPage: number
    handleChangePage: (page: number) => void
}

const PaginationItem = (props: Props) => {
    const { index, page, currentPage, handleChangePage } = props

    if (page === '...') {
        return (
            <span key={`dots-${index}`} className={styles.dots}>
                ...
            </span>
        )
    }

    return (
        <Button
            key={page}
            type="button"
            className={`${styles.page} ${page === currentPage ? styles.active : ''}`}
            onClick={() => handleChangePage(page)}
        >
            {page}
        </Button>
    )
}

export default PaginationItem
