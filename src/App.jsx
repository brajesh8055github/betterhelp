import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Advice from './Pages/Advice'
import Contact from './Pages/Contact'
import LandingPage from './Pages/LandingPage'
import Therapistjobs from './Pages/Therapistjobs'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/advice" element={<Advice />}></Route>
        <Route path="/therapist" element={<Therapistjobs />}></Route>
      </Routes>
    </>
  )
}

export default App
