// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Body from './components/Body';
import Writeup from './components/Writeup';
import Items from './components/Items';
import data from './components/ItemsArray';




function App() {

  const elements = data.map(item => {
      return (
        <Items
          key = {item.id}
          image = {item.image}
          rating = {item.rating}
          ratingNumber = {item.ratingNumber}
          country = {item.country}
          title = {item.title}
          price = {item.price}
      />
      )
  })

  return (
    <div>
      <Navbar />
      <Body />
      <Writeup />
      {elements} 
      
    </div>
  )
}

export default App
