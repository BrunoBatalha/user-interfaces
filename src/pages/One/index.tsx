import React from 'react';

import Item from './components/Item';
import './style.css';

const colors = [
  { dark: '#7CA0F3', light: '#7FB6F2' },
  { dark: '#EFA25D', light: '#F4B066' },
  { dark: '#EA5873', light: '#EB678E' },
  { dark: '#9580F4', light: '#BE7AF4' },
  { dark: '#68E0B7', light: '#6BEBDC' },
];

const One: React.FC = () => (
  <div id="One">
    <div className="container-list">
      {colors.map((e) => <Item dark={e.dark} light={e.light} />)}
    </div>
  </div>
);

export default One;
