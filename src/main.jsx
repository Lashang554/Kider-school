import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Classes from './pages/Classes.jsx'
import Pages from './pages/Pages.jsx'
import Contact from './pages/Contact.jsx'
import Nabvar from './components/Nabvar.jsx'
import Footer from './components/Footer.jsx'
import Facility from './pages/Facility.jsx'
import Team from './pages/Team.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Nabvar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/team" element={<Team />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
