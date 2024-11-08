import LandingPage from "./components/page-ui/LandingPage"
import Navbar from "./components/page-ui/Navbar"
import About from "./components/page-ui/About"
import Skills from "./components/page-ui/Skills"
import Projects from "./components/page-ui/Projects"
import Contact from "./components/page-ui/Contact"
import Footer from "./components/page-ui/Footer"
function App() {

  return (
    <div>
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
