import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  let [loading, setLoading] = useState(true);
  let [tours, setTours] = useState([]);

  let fetchData = async () => {
    setLoading(true);
    try {
      let respose = await fetch(url);
      let data = await respose.json();
      setLoading(false);
      setTours(data);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  let remove = id => {
    let updated = tours.filter(tour => tour.id !== id);
    setTours(updated);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>nothing left just referest</h2>
        <button onClick={() => fetchData()}>refresh</button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} remove={remove} />
    </main>
  );
}

export default App;

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [tours, setTours] = useState([]);

//   const remove = id => {
//     const newTour = tours.filter(tour => tour.id !== id);
//     setTours(newTour);
//   };

//   const fetchTour = async () => {
//     setLoading(true);

//     try {
//       let promise = await fetch(url);
//       let respose = await promise.json();
//       setLoading(false);
//       setTours(respose);
//     } catch (err) {
//       setLoading(false);
//       console.error(err);
//     }
//   };
//   useEffect(() => {
//     fetchTour();
//   }, []);

//   if (loading) {
//     return (
//       <main>
//         <Loading />;
//       </main>
//     );
//   }

//   if (tours.length === 0) {
//     return (
//       <main>
//         <div className="title">
//           <h2>no More Left</h2>
//           <button onClick={() => fetchTour()}>refresh</button>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main>
//       <Tours tours={tours} remove={remove} />
//     </main>
//   );
// }
