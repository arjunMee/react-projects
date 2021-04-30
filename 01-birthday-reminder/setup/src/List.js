import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map(people => {
        let { id, name, age, image } = people;
        return (
          <div key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} Year</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
