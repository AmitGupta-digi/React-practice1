import React, { Component } from 'react';
import Greet from './components/Greet';
import './App.css';
import String from './components/Examples/String';
import Condition from './components/Examples/Condit';
import IsLogin from './components/Examples/login';

class App extends Component {
  render() {
    const curMonth = "May";
    return (
      <div className="App">
        <Greet Name='VIPIN' />
        <String month={curMonth} />
        <Condition visited={true} Name='Pankaj Sir'/>
        <IsLogin IsLog={false}/>
      </div>
    );
  }
}
export default App;
