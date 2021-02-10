import styles from './NewsCard.module.css';
import test from '../../assets/test.jpg'

const NewsCard: React.FC = ({children}) => {
  return ( 
    <div className={styles.card}>
      <div className={styles.cardItem}>
        <img className={styles.imgResponsive} src={test} alt=""/>
        <div className={styles.newsCardInfoBox}>
          <h5 className={styles.newsCardTitle}>title</h5>
        </div>
      </div>
      <div className={styles.cardItem}>
        <img className={styles.imgResponsive} src={test} alt=""/>
        <div className={styles.newsCardInfoBox}>
          <h5 className={styles.newsCardTitle}>title</h5>
        </div>
      </div>
      <div className={styles.cardItem}>
        <img className={styles.imgResponsive} src={test} alt=""/>
        <div className={styles.newsCardInfoBox}>
          <h5 className={styles.newsCardTitle}>title</h5>
        </div>
      </div>
    </div>
  )
};


export default NewsCard;