import React from 'react';

import './style.css';
import img from '../../assets/img/narutin.png';
import ItemModel from './mode/Item';

interface ItemProps {
  item: ItemModel
}

const Item: React.FC<ItemProps> = (props) => {
  const { item } = props;

  return (
    <div id="Item" style={{ backgroundColor: item.dark, boxShadow: `0 5px 10px ${item.light}` }}>
      <div className="side-info">
        <div className="container-image">
          <img src={img} alt="nome autor" />
        </div>
        <div className="container-info">
          <div className="info-text">
            <div>
              <p>{item.name}</p>
              <p>{item.title}</p>
            </div>
          </div>

          <ul className="list-info-numbers">
            <li>
              <p>{item.popularity}</p>
              <p>Popularity</p>
            </li>
            <li>
              <p>{item.popularity}</p>
              <p>Popularity</p>
            </li>
            <li>
              <p>{item.popularity}</p>
              <p>Popularity</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="side-ranking" style={{ backgroundColor: item.light }}>
        <button type="button">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </button>
        <p>{item.ranking}</p>
        <p>Raking</p>
      </div>
    </div>
  );
};

export default Item;
