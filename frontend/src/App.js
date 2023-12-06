import React from 'react'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shoes from './components/Shoes/Shoes';
import Backpack from './components/Backpack/Backpack';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Cart from './components/Cart/Cart';


function App() {
  return (
    <div className='App'>
      <Router>
      <Header/>
        <Routes>

     <Route path='/' element={<Home/>}/>

     <Route path='/shoe' element={<Shoes/>}/>
     <Route path='/back' element={<Backpack/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/contact' element={<Contact/>}/>
     </Routes>

     </Router>
    </div>
  );
}

export default App;
