import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs/AboutUs'
import AddForm from './components/AddForm/AddForm'
import Contacts from './components/Contacts/Contacts'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Select from './components/Select/Select'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [some, setSome] = useState([]);
  let handleSome = (obj)=>{
    let newSome = [...some];
    newSome.push(obj);
    setSome(newSome);
    console.log(some);
  }
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element = {<Home some={some}/>}/>
      <Route path='/addform' element={<AddForm  handleSome ={handleSome}/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/select' element={<Select/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
