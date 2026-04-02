import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'
import logo from '../../shared/assets/logo.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <NavLink to='/'>
            <img
              src={logo}
              alt='Credit card'
              className={styles.image}
                    />
          </NavLink>
          <div>
            <p className={styles.phone}>
              +7 (495) 984 25 13
            </p>
            <p className={styles.email}>
              info@neoflex.ru
            </p>
          </div>
        </div>
        <div className={styles.links}>
          <NavLink to="#" className={styles.link}>
            About bank
          </NavLink>
          <NavLink to="#" className={styles.link}>
            Ask a Question
          </NavLink>
          <NavLink to="#" className={styles.link}>
            Quality of service
          </NavLink>
          <NavLink to="#" className={styles.link}>
            Requisites
          </NavLink>
          <NavLink to="#" className={styles.link}>
            Press center
          </NavLink>
          <NavLink to="#" className={styles.link}>
            Bank career
          </NavLink>
          <NavLink to="#" className={styles.link}>
            Investors
          </NavLink>
          <NavLink to="#" className={styles.link}>
            Analytics
          </NavLink>
          <NavLink to="#" className={styles.link}>
            Business and processes
          </NavLink>
          <NavLink to="#" className={styles.link}>
            Compliance and business ethics
          </NavLink>
        </div>
        <p className={styles.description}>
          We use cookies to personalize our services and improve the user experience of our website. 
          Cookies are small files containing information about previous visits to a website. 
          If you do not want to use cookies, please change your browser settings
        </p>
      </div>
    </footer>
  )
}

export default Footer