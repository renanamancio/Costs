import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar.js'
import Footer from './components/layout/Footer.js';
import Project from './components/pages/Projects.js';

function App() {
  return (
      <Router>
        <NavBar/>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
        <Footer/>
     </Router>  
  )
}

export default App;
