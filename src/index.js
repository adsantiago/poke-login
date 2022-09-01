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
import { AuthProvider } from './Contexts/AuthContext';
import PrivateRoute from './Components/PrivateRoute';

//const root = ReactDOM.createRoot(document.getElementById('root'));

WebFont.load({
  google: {
    families: ['Roboto: 400,500', 'Ubuntu']
  }
});

const Index = () => {
  return (
    <>
    <AuthProvider>
        <Router>
          <Contenedor>
            <Routes>
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Login" element={<Login />} />
              
              <Route path="/Pokemon/:name" element={
                <PrivateRoute>
                  <Pokemon />
                </PrivateRoute>
              }/>
              <Route path="/" element={
                <PrivateRoute>
                  <App />
                </PrivateRoute>
              } />
              
            </Routes>
          </Contenedor>
        </Router>
    </AuthProvider>
      <Background />
    </>
    
    
  );
}
 

ReactDOM.render(<Index />, document.getElementById('root'));

