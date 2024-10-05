import { useState } from 'react'
import './App.css'
import '../src/animations/animate.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import loader from '../src/assets/enhance/omnitrix.gif'
function App() {
  return (
   <div className="App">
    <Router>
      <Routes>
      <Route path='/' element={<Header/>}/>
      </Routes>
    </Router>
   </div>
  )
}

export default App
