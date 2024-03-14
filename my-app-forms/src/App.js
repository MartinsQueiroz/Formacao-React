import './App.css';
import React from 'react';
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Button />
      <Footer />
    </div>
  );
}

export default App;
