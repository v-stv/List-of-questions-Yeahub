import styles from './NavigationMenuItem.module.css'
import { NavLink } from 'react-router-dom'
import type { MenuLink } from '../../model/types'

type Props = {
    link: MenuLink
}

const NavigationMenuItem = (props: Props) => {
    const {
        link: { to, title },
    } = props

    return (
        <li>
            <NavLink className={styles.menu_link} to={to}>
                {title}
            </NavLink>
        </li>
    )
}

export default NavigationMenuItem
