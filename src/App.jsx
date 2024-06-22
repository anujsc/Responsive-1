import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import Nav from './component/Nav'
import Cards from './component/Cards'

function App() {

  return (
    <>
    <Nav/>
     <Home/>
     <Cards/>
    </>
  )
}

export default App
