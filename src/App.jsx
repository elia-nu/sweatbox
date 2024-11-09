import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Layout from './componets/dashboard/layout'
import AboutOwner from './componets/about-owner'
import About from './componets/about'
import Home from './componets/home'
import Gallery from './componets/Gallery'
import Services from './componets/services'
import Home2 from './componets/home2'
import Contact from './componets/contact'
import Navbar from './componets/commen/navbar'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className='bg-center bg-cover bg-no-repeat' style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)),url('https://sweatboxapg.com/wp-content/uploads/2021/12/13.jpg')",
      backgroundAttachment: "fixed"
    }}>
      {!isHomePage && <Navbar />}
      
      <Routes>
        <Route path="/dashboard/*" element={<Layout />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/2" element={<Home2 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Coaches & Trainers" element={<AboutOwner />} />
      </Routes>
    </div>
  )
}

export default App
