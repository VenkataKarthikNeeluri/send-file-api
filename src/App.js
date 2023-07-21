import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ToastContainer} from 'react-toastify'

import Menu from './component/Menu';
import Home from './component/Home';
import Details from './component/Details';
import Pnf from './component/Pnf';

function App() {
  return (
    <BrowserRouter>
      <Menu/>  
      <ToastContainer autoClose={4000} position={'top-right'}/>

      <Routes>
        <Route path={`/`} element={<Home/>} />
        <Route path={`/details/:id`} element={<Details/>} />
        <Route path={`/*`} element={<Pnf/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
