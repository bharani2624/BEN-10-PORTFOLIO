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
import loader from '../src/assets/enhance/omnitrix.gif';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState('');
  
  // Ben 10 quotes
  const quotes = [
    "It's Hero Time!",
    "You're never too young to be a hero.",
    "I’m just getting started!",
    "Heroes never give up.",
    "I can’t always win, but I never give up."
  ];

  useEffect(() => {
    // Set loading time to 10 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100000);

    // Display a new quote every 3 seconds during loading
    const quoteTimer = setInterval(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearInterval(quoteTimer); // Clean up the interval when component unmounts
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loader flex flex-col items-center justify-center h-screen w-screen">
          <div className="w-6/12 h-24 flex flex-col items-center justify-center text-green-600 text-xl text-center mt-4 border">
            {quote?quote:"I am Just Being Over Confident."} <br />
            <span className='text-bold font-grobold text-ben10'>
              -BEN<span className='text-indigo-50 border-black border-opacity-25 font-grobold'>10</span>
            </span>
          </div>
          <div className="neobar mt-6">
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
