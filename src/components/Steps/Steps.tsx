import styles from './Steps.module.css'

interface StepItem {
  number: number;
  description: string;
}

const stepsData: StepItem[] = [
  {
    number: 1,
    description: 'Fill out an online application you do not need to visit the bank',
  },
  {
    number: 2,
    description: 'Find out the bank\'s decision immediately after filling out the application',
  },
  {
    number: 3,
    description: 'The bank will deliver the card free of charge, wherever convenient, to your city',
  },
];

const Steps = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>How to get a card</h2>
        
        <div className={styles.wrapper}>
          {stepsData.map((step) => (
            <div key={step.number}>
              <div className={styles.item}>
                <div className={styles.numberWrapper}>
                  <div className={styles.number}>{step.number}</div>
                  <div className={styles.connector} />
                </div>                  
                <div className={styles.content}>
                  <p className={styles.description}>{step.description}</p>
                </div>
              </div>              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps