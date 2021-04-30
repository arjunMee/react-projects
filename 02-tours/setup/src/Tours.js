import React from 'react';
import Tour from './Tour';

function Tours({ tours, remove }) {
  return (
    <main>
      <h3 className="title">Our Tours</h3>
      <div>
        {tours.map(tour => {
          return <Tour key={tour.id} {...tour} remove={remove} />;
        })}
      </div>
    </main>
  );
}

export default Tours;

// const Tours = ({ tours, remove }) => {
//   return (
//     <section>
//       <div className="title">
//         <h2>Our Tour</h2>
//         <div className="userline"></div>
//       </div>
//       <div>
//         {tours.map(tour => {
//           return <Tour key={tour.id} {...tour} remove={remove}></Tour>;
//         })}
//       </div>
//     </section>
//   );
// };
