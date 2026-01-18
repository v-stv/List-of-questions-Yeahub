import styles from './ErrorMessage.module.css'
import { Error } from '@/shared/assets'
import { Button } from '@/shared/ui/Button'

type Props = {
    title?: string
    description?: string
    onRetry?: () => void
}

const ErrorMessage = (props: Props) => {
    const {
        title = 'Произошла ошибка',
        description = 'Не удалось загрузить данные. Попробуйте обновить страницу.',
        onRetry,
    } = props

    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <Error />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {onRetry && (
                <Button
                    type={'button'}
                    children={'Попробовать снова'}
                    className={styles.retryButton}
                    onClick={onRetry}
                />
            )}
        </div>
    )
}

export default ErrorMessage
