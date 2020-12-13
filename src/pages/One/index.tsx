import React from 'react';

import Item from './components/Item';
import './style.css';
import { itens } from './data';

const One: React.FC = () => (
  <div id="One">
    <div className="container-list">
      {itens.map((e) => <Item item={e} />)}
    </div>
  </div>
);

export default One;
