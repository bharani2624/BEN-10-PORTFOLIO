import { useEffect, useState } from 'react';
import './App.css';
import '../src/animations/animate.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Achievements from './assets/components/Achievements';
import About from './assets/components/About';
import Content from './assets/components/Content';
import Footer from './assets/components/Footer';
import NeonProgressBar from './assets/components/NeonProgressBar/NeonProgressBar';
import Skills from './assets/components/Skills';
import TagCloud from './assets/components/Cloud/TagCloud';
import pod from './assets/images/bg.jpeg';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import CircularMenu from './assets/components/CircularMenu/CircularMenu';

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
      },5000)
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
  
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  
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
        <div className="loader flex flex-col items-center justify-center w-screen">
          <div className=" absolute inset-0 bg-cover bg-center filter blur-md" style={backgroundPosition}></div>
          <div className="relative w-9/12 h-28 md:w-6/12 md:h-24 lg:w-6/12 space-y-2 flex flex-col items-center justify-center text-green-600 text-4xl text-center mt-4 border-spacing-5 lg:h:24 ">
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
            <Particles className=""
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#0000",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode:"repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 0,
                  },
                  repulse: {
                            distance: 500,
                            duration: 0.5,
                          },
                        },
                      },
                      particles: {
                        color: {
                          value: "#ffffff",
                        },
                        links: {
                          color: "#3857",
                          distance: 500,
                          enable: true,
                          opacity: 0.5,
                          width: 0.5,
                        },
                        move: {
                          direction: "none",
                          enable: true,
                          outModes: {
                            default: "bounce",
                          },
                          random: false,
                          speed: 10,
                          straight: false,
                        },
                        number: {
                          density: {
                            enable: true,
                            area: 900,
                          },
                          value: 50,
                        },
                        opacity: {
                        value: 0.5,
                      },
                      shape: {
                        type: "square",
                      },
                      size: {
                        value: { min: 0, max: 1 },
                      },
                    },
                detectRetina: true,
                emitters: [
                  {
                    direction: "top",
                    position: {
                      x: 50,
                      y: 0,
                    },
                    rate: {
                      quantity: 10,
                      delay: 0.1,
                    },
                    size: {
                      width: 100,
                      height: 0,
                    },
                  },
                  {
                    direction: "bottom",
                    position: {
                      x: 50,
                      y: 100,
                    },
                    rate: {
                      quantity: 0,
                      delay: 0.1,
                    },
                    size: {
                      width: 100,
                      height: 0,
                    },
                  },
                  {
                    direction: "left",
                    position: {
                      x: 50,
                      y: 50,
                    },
                    rate: {
                      quantity: 0,
                      delay: 0.1,
                    },
                    size: {
                      width: 0,
                      height: 100,
                    },
                  },
                  {
                    direction: "right",
                    position: {
                      x: 100,
                      y: 50,
                    },
                    rate: {
                      quantity: 100,
                      delay: 0.1,
                    },
                    size: {
                      width: 0,
                      height: 100,
                    },
                  },
                ],
              }}
              />
            <Content />
            <About />
            <Achievements/>
            <Skills/>
            <Footer/>
          <CircularMenu/>
          </div>
          <Routes>
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
