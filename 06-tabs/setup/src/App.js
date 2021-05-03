import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight, FaChevronRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const respone = await fetch(url);
    const data = await respone.json();
    setJob(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="section loading">
        <h1>loading</h1>
      </div>
    );
  }

  const { company, dates, duties, title } = job[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experiance</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {job.map((pre, index) => {
            return (
              <button
                className={`job-btn ${index === value && 'active-btn'}`}
                onClick={() => {
                  setValue(index);
                }}
                key={pre.id}
              >
                {pre.company}
              </button>
            );
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaChevronRight className="job-icon"></FaChevronRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;

// <section className="section">
//       <div className="title">
//         <h2>experience</h2>
//         <div className="underline"></div>
//       </div>
//       <div className="jobs-center">
//         {/* btn container */}
//         <div className="btn-container">
//           {jobs.map((item, index) => {
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => setValue(index)}
//                 className={`job-btn ${index === value && 'active-btn'}`}
//               >
//                 {item.company}
//               </button>
//             )
//           })}
//         </div>
//         {/* job info */}
//         <article className="job-info">
//           <h3>{title}</h3>
//           <h4>{company}</h4>
//           <p className="job-date">{dates}</p>
//           {duties.map((duty, index) => {
//             return (
//               <div key={index} className="job-desc">
//                 <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
//                 <p>{duty}</p>
//               </div>
//             )
//           })}
//         </article>
//       </div>
//       <button type="button" className="btn">
//         more info
//       </button>
//     </section>
