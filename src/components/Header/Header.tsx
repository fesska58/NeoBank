import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <NavLink to='/' className={styles.logo}>
                    NeoBank
                </NavLink>

                <nav className={styles.nav}>
                    <NavLink
                        to="/credit-card"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.active}` : styles.link
                        }
                    >
                        Credit card
                    </NavLink>

                    <NavLink to="/product" className={styles.link}>
                        Product
                    </NavLink>

                    <NavLink to="/account" className={styles.link}>
                        Account
                    </NavLink>

                    <NavLink to="/resources" className={styles.link}>
                        Resources
                    </NavLink>
                </nav>

                <button className={styles.button}>
                    Online Bank
                </button>
            </div>
        </header>
    )
}

export default Header