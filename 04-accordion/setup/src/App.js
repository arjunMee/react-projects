import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  let [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>question and answer aobut ligin</h3>
        <section className="info">
          {question.map(que => {
            return <SingleQuestion key={que.id} {...que} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
