import { BrowserRouter } from 'react-router-dom'; // get domain
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Projects, StarsCanvas} from './components';


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
        <Tech />
        <Projects />
        <Feedbacks />
        <div className = "relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
   </BrowserRouter>
  )
}

export default App
