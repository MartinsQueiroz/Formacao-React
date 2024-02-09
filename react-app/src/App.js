
import './App.css';
import React from 'react';
import Clock from './components/Clock';
import Welcome from './components/Welcome';
import Button from './components/Button/Button';
import Calculator from './components/Calculator/Calculator';
import Display from './components/Display/Display';
import Keypad from './components/Keypad/Keypad';



export default function MyApp() {
  return (
    <div className="App">
      <header className="App-header">
      <Clock />
      <Welcome className="heading" name="Lucas"/>
      <Display />
      <Keypad />
      <Calculator />
      <Button />
      </header>
    </div>
  );
}
