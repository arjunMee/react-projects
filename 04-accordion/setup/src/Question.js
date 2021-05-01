import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  let [show, setShow] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      <p>{show && info}</p>
    </article>
  );
};

export default Question;
