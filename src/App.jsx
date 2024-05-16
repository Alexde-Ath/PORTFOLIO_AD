import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Projects} from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className = "relative z-0 bq-primary">
        <div className = "bg-hero-pattern bg-cover bq-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience />
        <Projects />
        <div className = "relative z-0">
          <Contact />
        </div>
      </div>
   </BrowserRouter>
  )
}

export default App
