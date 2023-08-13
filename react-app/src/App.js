
import './App.css';
import Welcome from './components/welcome';
import WelcomeClass from './components';
import React from 'react';
import Clock from './components/Clock';
import BemVindo from './components/BemVindo'


export default function MyApp() {
  return (
    <div className="App">
      <header className="App-header">
      <Clock />
      <Welcome name="Lucas" />
      <WelcomeClass name="Lucas" />
      <BemVindo name="Lucas"/>
      <h1>Welcome</h1>
      <h2>Welcome</h2>
      <h3>Welcome</h3>
      <h4>Welcome</h4>
      <h5>Welcome</h5>
      <h6>Welcome</h6>
      </header>
    </div>
  );
}
