
import './App.css';
import React from 'react';
import Clock from './components/Js/Clock';
import Welcome from './components/Js/Welcome';
import Button from './components/Button';
import Calculator from './components/Js/Calculator';
import Display from './components/Js/Display';
import Keypad from './components/Js/Keypad';



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
