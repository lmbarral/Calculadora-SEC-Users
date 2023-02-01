import React, { useState } from 'react';
import './App.css';
import Calculator from './modules/Calculator/Calculator';
import ShowData from './modules/ShowData/ShowData';
import Math from './modules/Math/Math';
import Nav from './modules/NavBar/Nav';
import Footer from './modules/Footer/Footer';
import PreCalculator from './modules/PreCalculator/PreCalculator';

function App() {
  const[neto, setNeto] = useState({});
  const[st, setSt] = useState(true);

  const onSubmit = form => {
    setNeto(Math(form));
  }

  const pState = state => {
    setSt(state);
    console.log(st);
  }

  return (
    <div className="App">
      <>
        <Nav />
        <PreCalculator />
        <Calculator submitSearch={onSubmit} passState={pState}/>
        {!st && <ShowData neto={neto}/>}
        <Footer />
      </>
    </div>
  );
}

export default App;