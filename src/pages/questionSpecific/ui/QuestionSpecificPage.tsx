import styles from './QuestionSpecificPage.module.css'
import { ArrowBack } from '@/shared/assets'
import { QuestionSpecific } from '@/widgets/question'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/Button'

const QuestionSpecificPage = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <Button type={'button'} className={styles.button} onClick={handleNavigate}>
                    <ArrowBack />
                    Назад
                </Button>
                <QuestionSpecific />
            </div>
        </main>
    )
}

export default QuestionSpecificPage
