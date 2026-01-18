import styles from './Pagination.module.css'
import { PaginationArrowLeft, PaginationArrowRight } from '@/shared/assets'
import { usePagination } from '@/shared/lib'
import PaginationItem from '../PaginationItem/PaginationItem'
import { Button } from '@/shared/ui/Button'

type Props = {
    totalPages: number
    currentPage: number
}

const Pagination = (props: Props) => {
    const { totalPages, currentPage } = props

    const { pages, handleChangePage, handleNextPage, handlePrevPage } = usePagination(
        totalPages,
        currentPage
    )

    return (
        <div className={styles.container}>
            <div className={styles.pagination_wrapper}>
                <div className={styles.pagination}>
                    <Button
                        type={'button'}
                        className={styles.arrow}
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        <PaginationArrowLeft />
                    </Button>
                    {pages.map((page, index) => (
                        <PaginationItem
                            key={page}
                            index={index}
                            page={page}
                            currentPage={currentPage}
                            handleChangePage={handleChangePage}
                        />
                    ))}
                    <Button
                        type={'button'}
                        className={styles.arrow}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        <PaginationArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Pagination
