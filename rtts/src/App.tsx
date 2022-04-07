import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import {RecoilRoot} from 'recoil'
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register'
import Run from './pages/Run';
import Header2 from './components/Header2';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
    <RecoilRoot>
    <BrowserRouter>
    <Header2/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/run' element={<Run/>}/>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
    </>
  );
}

export default App;
