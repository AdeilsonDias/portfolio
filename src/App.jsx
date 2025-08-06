import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VantaNet from './ComponentsEfects/VantaNet'
import './App.css'
import Header from './Components/Header/Header'
import Homee from './Components/Homee/Home'
import About from './Components/About/About'
import Projectss from './Components/Projectss/Projects';
import Contact from './Components/Contact/Contact';
function App() {




  return (

    <Router basename='/portfolio'>
      <VantaNet />
      <Header />
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projectss />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </Router>

  )
}

export default App
