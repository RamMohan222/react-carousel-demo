import React from 'react'
import Container from 'react-bootstrap/Container';
import { CookiesProvider, useCookies } from 'react-cookie';
import { Routes, Route, BrowserRouter, Navigate, } from "react-router-dom";

// custom components
import Home from './components/Home';
import Login from './components/Login';
// css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [c] = useCookies(['name'])
  return (
    <CookiesProvider>
      <Container fluid>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={c.name ? <Home /> : <Navigate to="/login" />} />
            <Route path='/login' element={c.name ? <Navigate to="/" /> : <Login />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CookiesProvider>
  );
}


export default App;
