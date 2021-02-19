import styles from './CarCard.module.css';

import test from '../../assets/test.jpg';

const CarCard: React.FC = () => {
  return (
    <div className="col mb-4">
      <div className="row">
        <div className="col">
          <div className={styles.imgContainer}>
            <img
              src={test}
              className="img-responsive img-responsive_cover"
              alt="safsaf"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h3 className="card-title">volkswagen</h3>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <ul className={styles.priceList}>
            <li className={styles.listItem}>
              <div className={styles.listDays}>20</div>
              <div className={styles.listPrice}>20</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 d-flex justify-content-between">
          <div className="mt-1">
            <img className="car-card__spec-icon" alt="places" />
            <span className="car-card__spec-name">5</span>
          </div>

          <div className="mt-1">
            <img
              width="20"
              height="20"
              className="car-card__spec-icon"
              alt="konduk"
            />
            <span className="car-card__spec-name">A/C</span>
          </div>

          <div className="mt-1">
            <img
              width="20"
              height="20"
              className="car-card__spec-icon"
              alt="price"
            />
            <span className="car-card__spec-name">200€</span>
          </div>
        </div>
        <div className="col-lg-6">
          <a className="btn_main btn_slim mb-0">Бронювати</a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
