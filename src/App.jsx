import LandingPage from "./components/page-ui/LandingPage"
import Navbar from "./components/page-ui/Navbar"
import About from "./components/page-ui/About"
import Skills from "./components/page-ui/Skills"
import Projects from "./components/page-ui/Projects"
import Contact from "./components/page-ui/Contact"
import Footer from "./components/page-ui/Footer"
import { BrowserRouter as Router } from "react-router-dom"

function App() {

  return (
    <Router>
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App
