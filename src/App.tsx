import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Hanoi } from "./hanoi";

function App() {
  const hanoiObj = new Hanoi();
  const totalDisks = hanoiObj.getLength();

  console.log('Before hanoi');
  hanoiObj.printA();
  hanoiObj.printB();

  hanoiObj.hanoi(totalDisks, hanoiObj.getA(), hanoiObj.getB(), hanoiObj.getC());
  
  console.log('After hanoi');
  hanoiObj.printA();
  hanoiObj.printB();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Check your console for algo</p>
      </header>
    </div>
  );
}

export default App;
