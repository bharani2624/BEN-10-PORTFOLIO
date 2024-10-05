import { useEffect, useState } from 'react'
import './App.css'
import '../src/animations/animate.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import Achievements from './assets/components/Achievements';
import Content from './assets/components/Content';
import Footer from './assets/components/Footer';
import loader from '../src/assets/enhance/omnitrix.gif'
function App() {
  const[isLoading,setIsLoading]=useState(true);
  useEffect(()=>
    {
      const timer =setTimeout(()=>
        {
          setIsLoading(false);
        },1000);
        return ()=> clearTimeout(timer);
    },[])
  return (
   <div className="App">
    {isLoading?(
      <div className="loader flex flex-col items-center justify-center space-y-5 h-screen w-screen">
        <img src={loader} className='w-32 h-32' alt="" />
        <div className="text-green-600 font-grobold text-right">
          Loading...
        </div>
      </div>
    ):(
      
      <Router>
        <div>
          <Header/>
          <Content/>
        </div>
      <Routes>
      <Route path='/Header' element={<Header/>}/>
      <Route path='/Achievements' element={<Achievements/>}/>
      <Route path='/Content' element={<Content/>}/>
      <Route path='/Footer' element={<Footer/>}/>
      </Routes>
    </Router>
    )}
   </div>
  )
}

export default App
