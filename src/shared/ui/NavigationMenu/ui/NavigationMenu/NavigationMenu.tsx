import styles from './NavigationMenu.module.css'
import type { MenuLink } from '../../model/types'
import NavigationMenuItem from '../NavigationMenuItem/NavigationMenuItem'

type Props = {
    navLinks: MenuLink[]
}

const NavigationMenu = (props: Props) => {
    const { navLinks } = props

    return (
        <nav>
            <ul className={styles.menu}>
                {navLinks.map((link) => (
                    <NavigationMenuItem key={link.title} link={link} />
                ))}
            </ul>
        </nav>
    )
}

export default NavigationMenu
