import styles from './KeywordItem.module.css'

type Props = {
    keyword: string
}

const KeywordItem = (props: Props) => {
    const { keyword } = props

    return <p className={styles.title}>#{keyword}</p>
}

export default KeywordItem
