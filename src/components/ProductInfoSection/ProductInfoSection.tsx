import { useState } from 'react'
import styles from './ProductInfoSection.module.css'

interface Card {
  title: string;
  description: string;
  icon: string;
}

const cards: Card[] = [
  {
    title: 'Up to 50 000 ₽',
    description: 'Cash and purchases without commission and percent',
    icon: '../../../public/icons/Money.svg',
  },
  {
    title: 'Up to 160 days',
    description: 'Without percent on the loan',
    icon: '../../../public/icons/Calendar.svg',
  },
  {
    title: 'Free delivery',
    description: 'We will deliver your card by courier at a convenient place and time for you',
    icon: '../../../public/icons/Clock.svg',
  },
  {
    title: 'Up to 12 months',
    description: 'No percent. For equipment, clothes and other purchases in installments',
    icon: '../../../public/icons/Bag.svg',
    
  },
  {
    title: 'Convenient deposit and withdrawal',
    description: 'At any ATM. Top up your credit card for free with cash or transfer from other cards',
    icon: '../../../public/icons/Credit.svg',
  },
]

const tabs: string[] = [ 
  'About card',
  'Rates and conditions',
  'Cashback',
  'FAQ',
]

const ProductInfoSection = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === index ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(index)}>
                {tab}
            </button>
          ))}
        </div>

        <div className={styles.cards}>
          {cards.map((card, index) => (
            <div 
              key={card.title} 
              className={`${styles.card} ${index < 3 ? styles.cardTop : styles.cardBottom} 
              ${index === 1 || index === 3 ? styles.cardColor: ''}`}
            >
              <div className={styles.iconWrapper}>
                <img
                  src={card.icon}
                  alt=""
                  className={styles.icon}
                />
              </div>

              <h3 className={styles.cardTitle}>
                {card.title}
              </h3>

              <p className={styles.cardDescription}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductInfoSection