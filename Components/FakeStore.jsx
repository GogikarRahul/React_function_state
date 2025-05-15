import { useState } from 'react';
import Data from '../src/Data';
import './Fakestore.css';

const Fakestore = () => {
  const [data, setFakestoredata] = useState([]);

  const handleClick = (cat) => {
    const Final = Data.filter((val) => val.category === cat);
    setFakestoredata(Final);
  };

  return (
    <div className="fakestore-container">
      <div className="category-buttons">
        <button onClick={() => handleClick('electronics')}>Electronics</button>
        <button onClick={() => handleClick('jewelery')}>Jewellery</button>
      </div>

      <div className="products-grid">
        {data.map((val) => (
          <div key={val.id} className="product-card">
            <img src={val.image} alt={val.title} />
            <h1>{val.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fakestore;
