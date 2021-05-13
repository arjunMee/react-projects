// import React, { useState } from 'react';
// import data from './data';
// function App() {
//   return <h2>lorem ipsum project setup</h2>;
// }

// export default App;

import React, { Component } from 'react';

// Challenge:
// Given an incomplete class-based component without a constructor,
// add a constructor and initialize state to fix the broken component.

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 13,
    };
    this.handler = this.handler.bind(this);
    this.handler1 = this.handler1.bind(this);
  }

  handler() {
    console.log('hello');
    this.setState(prev => {
      return {
        count: prev.count++,
      };
    });
  }

  handler1() {
    // let ll = ++this.state.count;
    // console.log(ll);
    this.setState({ count: ++this.state.count });
  }

  render() {
    return (
      <div>
        <h3>{this.state.count} years old</h3>
        <button onClick={this.handler}>hello</button>
        <button onClick={this.handler1}>bye</button>
      </div>
    );
  }
}

export default App;
