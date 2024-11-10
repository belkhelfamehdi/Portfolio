import LandingPage from "./components/page-ui/LandingPage"
import Navbar from "./components/page-ui/Navbar"
import About from "./components/page-ui/About"
import Skills from "./components/page-ui/Skills"
import Projects from "./components/page-ui/Projects"
import Contact from "./components/page-ui/Contact"
import Footer from "./components/page-ui/Footer"
import Formation from "./components/page-ui/Formation"
import './index.css';
function App() {

  return (
    <div>
      <Navbar />
      <LandingPage />
      <About />
      <Formation />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
