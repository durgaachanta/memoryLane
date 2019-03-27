import React from 'react';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: [],
    };
  }
  // to add a new counter
  addNewCounter = () => {
    this.setState({ counter: [...this.state.counter, { count: 0 }] })

  }
  // increment a particular counter
  incrementCounter = (idx) => {
    let tempCounter = this.state.counter;
    tempCounter[idx].count++;
    this.setState({ counter: tempCounter });
  }

  //decrement a particular counter
  decrementCounter = (idx) => {
    let tempCounter = this.state.counter;
    tempCounter[idx].count--;
    this.setState({ counter: tempCounter });
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.addNewCounter}>AddCounter</button>
        {this.state.counter.map((count, idx) => {
          // console.log(count);
          // console.log(idx);
          return (
            <div className="counterdiv">
              <label className="lbl">Counter - {idx}</label>
              <label className="lbl">Count is  - {count.count}</label>
              <button className="btn" onClick={() => { this.incrementCounter(idx) }}>Increment Counter</button>
              <button className="btn" onClick={() => { this.decrementCounter(idx) }}>Decrement Counter</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CounterApp;