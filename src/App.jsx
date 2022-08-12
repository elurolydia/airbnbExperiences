// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Body from './components/Body';
import Writeup from './components/Writeup';
import Items from './components/Items';



function App() {


  return (
    <div>
      <Navbar />
      <Body />
      <Writeup />
      <div id='testing'>
      <Items />
      <Items />
      <Items />
      </div>
      
    </div>
  )
}

export default App
