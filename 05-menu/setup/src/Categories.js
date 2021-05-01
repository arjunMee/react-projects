import React from 'react';
// id,title,category,price,img,desc
const Categories = ({ filterItems, category }) => {
  return (
    <div className="btn-container">
      {category.map(pre => {
        return (
          <button
            key={pre}
            className="filter-btn"
            onClick={() => filterItems(pre)}
          >
            {pre}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
