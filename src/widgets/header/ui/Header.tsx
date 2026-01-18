import styles from './Header.module.css'
import { NAV_ITEMS } from '../config/constants'
import { EAppRoutes } from '@/shared/config/routes'
import { CustomLink } from '@/shared/ui/CustomLink'
import { NavigationMenu } from '@/shared/ui/NavigationMenu'
import { Button } from '@/shared/ui/Button'
import { useDispatch } from 'react-redux'
import { resetFilters } from '@/features/questionsFilters'

const Header = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(resetFilters())
    }

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.menu}>
                    <CustomLink
                        link={EAppRoutes.MAIN}
                        className={styles.logo_link}
                        onClick={handleClick}
                    >
                        <img src="/src/shared/assets/icons/yh-logo.svg" alt="Yeahub logo" />
                    </CustomLink>
                    <NavigationMenu navLinks={NAV_ITEMS} />
                </div>
                <div className={styles.buttons}>
                    <Button type={'button'} className={styles.sign_in_btn}>
                        Вход
                    </Button>
                    <Button type={'button'} className={styles.sign_up_btn}>
                        Регистрация
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
