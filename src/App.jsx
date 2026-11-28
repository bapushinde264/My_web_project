import { Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './Components/Footer'
import Header from './Components/Header'

import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Rent from './Pages/Rent'
import Buy from './Pages/Buy'
import Chikhali from './Pages/Chikhali'
import Moshi from './Pages/Moshi';
import Ravet from './Pages/Ravet';
import Akurdi from './Pages/Akurdi';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chikhali" element={<Chikhali />} />
        <Route path="/moshi" element={<Moshi />} />
        <Route path="/ravet" element={<Ravet />} />
        <Route path="/akurdi" element={<Akurdi />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App