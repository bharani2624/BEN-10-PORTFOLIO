import { useEffect, useState } from 'react';
import './App.css';
import '../src/animations/animate.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './assets/components/Header';
import Achievements from './assets/components/Achievements';
import About from './assets/components/About';
import Content from './assets/components/Content';
import Footer from './assets/components/Footer';
import NeonProgressBar from './assets/components/NeonProgressBar/NeonProgressBar';
import pod from './assets/images/bg.jpeg'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState('');
  const [mousePosition,setmousePosition]=useState({x:0,y:0});

  const quotes = [
    "It's Hero Time!",
    "You're never too young to be a hero.",
    "I’m just getting started!",
    "Heroes never give up.",
    "I can’t always win, but I never give up."
  ];
  const handleMouseMovement=(event)=>
    {
      const {clientX,clientY}=event;
      setmousePosition({x:clientX,y:clientY});
    }


  useEffect(()=>{
    const timer=setTimeout(()=>
      {
        setIsLoading(false);
      },15000)
      const quoteTimer=setInterval(()=>
        {
          const randomQuote=quotes[Math.floor(Math.random()*quotes.length)];
          setQuote(randomQuote);
        },1000);
        window.addEventListener('mousemove',handleMouseMovement)
        return()=>
          {
            clearTimeout(timer);
            clearInterval(quoteTimer);
            window.removeEventListener('mousemove',handleMouseMovement);
          }
  },[])
  const backgroundPosition=
  {
    backgroundPosition:`${mousePosition.x/150}px ${mousePosition.y/100}px`,
    backgroundImage:`url(${pod})`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'
    
  }
  return (
    <div className="App">
      {isLoading ? (
        <div className="loader flex flex-col items-center justify-center h-screen w-screen">
          <div className=" absolute inset-0 bg-cover bg-center filter blur-md" style={backgroundPosition}></div>
          <div className="relative w-6/12 h-24 space-y-2 flex flex-col items-center justify-center text-green-600 text-4xl text-center mt-4 border border-spacing-5 lg:h:24 lg:w-3/12">
            {quote?quote:"I am Just Being Over Confident."} <br />
            <span className='text-bold font-grobold text-2xl text-ben10'>
              -BEN<span className='text-white border-black border-opacity-25 font-grobold'>10</span>
            </span>
          </div>
          <div className="relative neobar mt-6">
            <NeonProgressBar />
          </div>
        </div>
      ) : (
        <Router>
          <div>
            <Content />
            <About />
          </div>
          <Routes>
            <Route path="/Header" element={<Header />} />
            <Route path="/Achievements" element={<Achievements />} />
            <Route path="/Content" element={<Content />} />
            <Route path="/Footer" element={<Footer />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
