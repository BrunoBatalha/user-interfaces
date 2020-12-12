import React from 'react';
import './style.css';

interface ItemProps {
  dark: string,
  light: string
}

const Item: React.FC<ItemProps> = (props) => {
  const { dark, light } = props;

  return (
    <div id="Item" style={{ backgroundColor: dark, boxShadow: `0 5px 10px ${light}` }}>
      <div className="side-info">
        <img src="" alt="nome autor" />
        <div className="container-info">
          <div className="info-text">
            <div>
              <p>David Borg</p>
              <p>Title: Flying Wings</p>
            </div>
          </div>

          <ul className="list-info-numbers">
            <li>
              <p>2342</p>
              <p>Popularity</p>
            </li>
            <li>
              <p>2342</p>
              <p>Popularity</p>
            </li>
            <li>
              <p>2342</p>
              <p>Popularity</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="side-ranking" style={{ backgroundColor: light }}>
        <button type="button">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </button>
        <p>1</p>
        <p>Raking</p>
      </div>
    </div>
  );
};

export default Item;
