import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './Elements/Container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './Components/Signin';
import Login from './Components/Login';
import Pokemon from './Components/Pokemon';
import { Helmet } from "react-helmet";
import Background from './Elements/Background';

//const root = ReactDOM.createRoot(document.getElementById('root'));

WebFont.load({
  google: {
    families: ['Roboto: 400,500', 'Ubuntu']
  }
});

const Index = () => {
  return (
    <>
      <Router>
        <Contenedor>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Pokemon" element={<Pokemon />} />
          </Routes>
        </Contenedor>
      </Router>
      <Background />
    </>
    
    
  );
}
 

ReactDOM.render(<Index />, document.getElementById('root'));

