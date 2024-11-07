import LandingPage from "./components/page-ui/LandingPage"
import Navbar from "./components/page-ui/Navbar"
import About from "./components/page-ui/About"
import Skills from "./components/page-ui/Skills"
import { BrowserRouter as Router } from "react-router-dom"

function App() {

  return (
    <Router>
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
    </Router>
  )
}

export default App
