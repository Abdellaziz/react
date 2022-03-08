import React, { Component } from 'react'
import Nav from '../NAv/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Footer from './../footer/Footer';
import PORTFOLIO from './../PORTFOLIO/PORTFOLIO';
import About from './../About/About';
import Conatact from './../contact/Conatact';
import Mahmoud from './../Mahmoud/Mahmoud';


export default class Allapp extends Component {
  render() {
    return <>
    <BrowserRouter>
    <Nav/>
    
<Routes>
<Route path='/' element={<Home/>}/>
   <Route path='STARTREACT' element={<Home/>}/>
   <Route path='PORTFOLIO' element={<PORTFOLIO/>}/>
   <Route path='about' element={<About/>}/>
   <Route path='contact' element={<Conatact/>}/>
   <Route path='mahmoud' element={<Mahmoud/>}/>

</Routes>
   
<Footer/>
    </BrowserRouter>
   
    
    
    
    </>
  }
}
