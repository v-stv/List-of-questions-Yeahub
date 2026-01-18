import styles from './RatingItem.module.css'
import type { Rating } from '../model/types'

type Props = {
    rating: Rating
}

const RatingItem = (props: Props) => {
    const { rating } = props

    return <span className={styles.specialization_title}>{rating.title}</span>
}

export default RatingItem
