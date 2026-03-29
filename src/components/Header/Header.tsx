import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>NeoBank</div>

                <nav className={styles.nav}>
                <a href="#">Credit card</a>
                <a href="#">About</a>
                <a href="#">Contacts</a>
                </nav>
            </div>
        </header>
    )
}

export default Header