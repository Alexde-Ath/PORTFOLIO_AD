import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Projects} from './components';


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
        <Feedbacks />
        <div className = "relative z-0">
          <Contact />
        </div>
      </div>
   </BrowserRouter>
  )
}

export default App
