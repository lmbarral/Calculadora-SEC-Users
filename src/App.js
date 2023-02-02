import React, { useState } from 'react';
import './App.css';
import Calculator from './modules/Calculator/Calculator';
import ShowData from './modules/ShowData/ShowData';
import Math from './modules/Math/Math';
import Nav from './modules/NavBar/Nav';
import Footer from './modules/Footer/Footer';
import PreCalculator from './modules/PreCalculator/PreCalculator';
import Error from './modules/Error/Error';

function App() {
  const[neto, setNeto] = useState({});
  const[st, setSt] = useState(true);
  const[error, setError] = useState(false);

  const onSubmit = form => {
    setNeto(Math(form));
  }

  const pState = state => {
    setSt(state);
    //console.log(st);
  }

  const pError = error => {
    setError(error);
  }

  //console.log(error);

  return (
    <div className="App">
      <>
        <Nav />
        <PreCalculator />
        {error && st && <Error />}
        <Calculator submitSearch={onSubmit} passState={pState} pError={pError}/>
        {!st && <ShowData neto={neto}/>}
        <Footer />
      </>
    </div>
  );
}

export default App;