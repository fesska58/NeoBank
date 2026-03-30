import styles from './HeroCard.module.css'
import cardImage from '../../shared/assets/card.png'

const HeroCard = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Platinum digital credit card
                        
                    </h1>

                    <p className={styles.description_text}>
                        Our best credit card. Suitable for everyday spending and shopping.<br/>
                        Cash withdrawals and transfers without commission and interest.
                    </p>

                    <div className={styles.items}>
                        <div className={styles.item}>
                            <p className={styles.label}>
                                Up to 160 days
                            </p>
                            <p className={styles.description}>
                                No percent
                            </p>
                        </div>
                        <div>
                            <p className={styles.label}>
                                Up to 600 000 ₽
                            </p>
                            <p className={styles.description}>
                                Credit limit
                            </p>
                        </div>
                        <div>
                            <p className={styles.label}>
                                0₽
                            </p>
                            <p className={styles.description}>
                                Card service is free
                            </p>
                        </div>
                        
                    </div>

                    

                    <button className={styles.button}>
                        Apply for card
                    </button>
                </div>
                <div className={styles.imageWrapper}>
                    <img
                        src={cardImage}
                        alt='Credit card'
                        className={styles.image}
                    />
                </div>
            </div>    
        </section>
    )
}

export default HeroCard