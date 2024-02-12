import React, { useState , useEffect } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import PowerOnly from './Components/PowerOnly'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dryvan from './Components/Dryvan'
import Reefer from './Components/Reefer'
import Flatbed from './Components/Flatbed'
import Boxtruck from './Components/Boxtruck'
import Hotshort from './Components/Hotshort'
import Freight from './Components/Freight'
import Rate from './Components/Rate'
import CircleLoader from "react-spinners/CircleLoader";
import './App.css'
export default function App() {

  const [mode, setMode] = useState('light');

 

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
  };
  const [loading , setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <>
    {
      loading ?
      <div className="App">
      <CircleLoader
      color={'#5254ff'}
      loading={loading}
      size={150}
      className='App'
      />
      </div>
    :
     <BrowserRouter>
     <Navbar mode={mode} toggleMode={toggleMode}/>
        <Routes>
        <Route path="/" element={<Home mode={mode} toggleMode={toggleMode}/>} />
        <Route path="/About" element={<About mode={mode} toggleMode={toggleMode} />} />
        <Route path="/Services" element={<Services mode={mode} toggleMode={toggleMode}/>} />
        <Route path="/Contact" element={<Contact mode={mode} toggleMode={toggleMode} />} />
        <Route path="/Poweronly" element={<PowerOnly mode={mode} toggleMode={toggleMode} />} />
        <Route path="/Dryvan" element={<Dryvan mode={mode} toggleMode={toggleMode} />} />
        <Route path="/Reefer" element={<Reefer mode={mode} toggleMode={toggleMode} />} />
        <Route path="/Flatbed" element={<Flatbed mode={mode} toggleMode={toggleMode} />} />
        <Route path="/Boxtruck" element={<Boxtruck mode={mode} toggleMode={toggleMode} />} />
        <Route path="/Hotshort" element={<Hotshort mode={mode} toggleMode={toggleMode} />} />
        <Route path="/Freight-Rates" element={<Freight mode={mode} toggleMode={toggleMode} />} />
        <Route path="/Rate-Negociation" element={<Rate mode={mode} toggleMode={toggleMode} />} />
        </Routes>
        <Footer mode={mode} toggleMode={toggleMode}/>
      </BrowserRouter>
    }

    </>
  )
}
