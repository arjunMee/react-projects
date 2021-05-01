import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

let UniqueItem = [
  'all',
  ...new Set(
    items.map(pre => {
      return pre.category;
    })
  ),
];

function App() {
  let [menuItems, setMenuItems] = useState(items);
  let [category, setCategory] = useState(UniqueItem);

  const filterItems = category => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} category={category} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
