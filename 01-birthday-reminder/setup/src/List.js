import React from 'react';

const List = ({ people }) => {
  let { id, name, age, image } = people[0];

  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default List;
