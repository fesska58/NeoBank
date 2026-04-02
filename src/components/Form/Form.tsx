import { type ChangeEvent, useMemo, useState } from 'react';
import styles from './Form.module.css';

interface FormData {
  lastName: string;
  firstName: string;
  patronymic: string;
  term: string;
  email: string;
  birthDate: string;
  passportSeries: string;
  passportNumber: string;
}

const MIN_AMOUNT = 15000;
const MAX_AMOUNT = 600000;

const Form = () => {
  const [amount, setAmount] = useState<number>(150000);

  const [formData, setFormData] = useState<FormData>({
    lastName: '',
    firstName: '',
    patronymic: '',
    term: '6 month',
    email: '',
    birthDate: '',
    passportSeries: '',
    passportNumber: '',
  });

  const progress = useMemo(() => {
    return ((amount - MIN_AMOUNT) / (MAX_AMOUNT - MIN_AMOUNT)) * 100;
  }, [amount]);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString('ru-RU');
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.columnWrapper}>
          <div className={styles.leftColumn}>
            <div className={styles.header}>
              <h2 className={styles.title}>Customize your card</h2>
              <span className={styles.step}>Step 1 of 5</span>
            </div>

            <div className={styles.sliderBox}>
              <span className={styles.sliderLabel}>Select amount</span>

              <div className={styles.sliderValue}>
                {formatNumber(amount)}
              </div>

              <input
                type="range"
                min={MIN_AMOUNT}
                max={MAX_AMOUNT}
                step={5000}
                value={amount}
                onChange={handleSliderChange}
                className={styles.slider}
                style={{
                  background: `linear-gradient(to right, #6B3DF4 0%, #6B3DF4 ${progress}%, #E6E3EE ${progress}%, #E6E3EE 100%)`,
                }}
              />

              <div className={styles.sliderFooter}>
                <span>15 000</span>
                <span>600 000</span>
              </div>
            </div>         
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.summary}>
              <h3>You have chosen the amount</h3>
              <div className={styles.summaryAmount}>
                {formatNumber(amount)} ₽
              </div>
            </div>
          </div>          
        </div>

        <div className={styles.formBlock}>
            <h3 className={styles.formTitle}>Contact Information</h3>

            <div className={styles.grid}>
              <div className={styles.field}>
                <label>
                  Your last name <span>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="For Example Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label>
                  Your first name <span>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="For Example Jhon"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label>Your patronymic</label>
                <input
                  type="text"
                  name="patronymic"
                  placeholder="For Example Victorovich"
                  value={formData.patronymic}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label>
                  Select term <span>*</span>
                </label>
                <select
                  name="term"
                  value={formData.term}
                  onChange={handleInputChange}
                >
                  <option value="6 month">6 month</option>
                  <option value="12 month">12 month</option>
                  <option value="24 month">24 month</option>
                </select>
              </div>

              <div className={styles.field}>
                <label>
                  Your email <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="test@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label>
                  Your date of birth <span>*</span>
                </label>
                <input
                  type="text"
                  name="birthDate"
                  placeholder="Select Date and Time"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  onFocus={e => (e.currentTarget.type = 'date')}
                  onBlur={e => {
                    if (!e.currentTarget.value) {
                      e.currentTarget.type = 'text';
                    }
                  }}
                />
              </div>

              <div className={styles.field}>
                <label>
                  Your passport series <span>*</span>
                </label>
                <input
                  type="text"
                  name="passportSeries"
                  placeholder="0000"
                  maxLength={4}
                  value={formData.passportSeries}
                  onChange={handleInputChange}
                />
              </div>

              <div className={styles.field}>
                <label>
                  Your passport number <span>*</span>
                </label>
                <input
                  type="text"
                  name="passportNumber"
                  placeholder="000000"
                  maxLength={6}
                  value={formData.passportNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
        </div>

        <div className={styles.btnWrapper}>
          <button className={styles.button}>Continue</button>
        </div>     
        
      </div>
    </section>
  );
};

export default Form
