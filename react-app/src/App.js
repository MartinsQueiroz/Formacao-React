
import './App.css';
import React from 'react';
import Clock from './components/Clock';
import Welcome from './components/Welcome'
import Button from './components/Button';
import Calculator from './components/Calculator';
import Display from './components/Display';
import Keypad from './components/Keypad';



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
