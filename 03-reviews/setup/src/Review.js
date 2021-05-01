import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

// id: 1,text name image

const Review = () => {
  let [index, setIndex] = useState(0);
  var { job, image, text, name } = people[index];

  const checknumber = num => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }

    return num;
  };

  const next = () => {
    setIndex(index => {
      let newNum = index + 1;
      return checknumber(newNum);
    });
  };

  const back = () => {
    setIndex(index => {
      let newNum = index - 1;
      return checknumber(newNum);
    });
  };

  const randon = () => {
    let ran = parseInt(Math.random() * people.length);
    let newNum = index === ran ? ran + 1 : ran;
    setIndex(checknumber(newNum));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => back()}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => next()}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={() => randon()}>
          surprice me
        </button>
      </div>
    </article>
  );
};

export default Review;
