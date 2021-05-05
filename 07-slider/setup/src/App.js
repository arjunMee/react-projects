import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  let [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <section className="section">
      <div className="title">
        <span>/</span>return
      </div>
      <div className="section-center">
        {people.map((person, peopleIndex) => {
          const { id, image, name, title, quote } = person;
          //more stuff to come
          let position = 'nextSlide';
          if (peopleIndex === index) {
            position = 'activeSlider';
          }
          if (
            peopleIndex === index - 1 ||
            (index === 0 && peopleIndex == people.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          {console.log(index)}
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
