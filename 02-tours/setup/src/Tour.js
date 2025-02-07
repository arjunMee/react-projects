import React, { useState } from 'react';

function Tour({ id, image, info, price, name, remove }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>

        <p>
          {readMore ? info : `${info.substring(0, 200)}`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'less' : 'readMore'}
          </button>
        </p>

        <button className="delete-btn" onClick={() => remove(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;

// const Tour = ({ id, image, info, price, name, remove }) => {
//   const [readMore, setReadMore] = useState(false);
//   return (
//     <article className="single-tour">
//       <img src={image} alt={name} />
//       <footer>
//         <div className="tour-info">
//           <h4>{name}</h4>
//           <h4 className="tour-price">{price}</h4>
//         </div>

//         <p>
//           {readMore ? info : `${info.substring(0, 200)}`}
//           <button onClick={() => setReadMore(!readMore)}>
//             {readMore ? 'less' : 'readMore'}
//           </button>
//         </p>

//         <button className="delete-btn" onClick={() => remove(id)}>
//           not interested
//         </button>
//       </footer>
//     </article>
//   );
// };
