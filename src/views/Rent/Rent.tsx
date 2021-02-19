import styles from './Rent.module.css';

import CarCard from '../../components/CarCard';

const Rent: React.FC = () => {
  return (
    <div>
      <h1>the rent page</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 mt-4">
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default Rent;
