import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { coinDetails } from '../redux/coins/coins';

const Coin = ({
  id, name, symbol, price, img, rank,
}) => {
  const dispatch = useDispatch();

  const display = () => {
    dispatch(coinDetails(symbol));
  };

  return (
    <li className="listItem">
      <div
        className="homeItem"
        id={id}
      >
        <div className="home-item-img">
          <Link
            to={`/details/${id}`}
          >
            <img src={img} alt={name} />
          </Link>
        </div>
        <div className="home-item-info">
          <p>
            #
            {rank}
          </p>
          <h3 className="name">{name}</h3>
          <p className="symbol">{symbol}</p>
          <p>
            $
            {price}
          </p>
        </div>
        <Link
          to={`/details/${name}`}
        >
          <FaArrowRight className="fontIcon" onClick={display} />
        </Link>
      </div>
    </li>
  );
};

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};

export default Coin;
