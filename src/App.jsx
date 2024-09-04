import { BrowserRouter } from 'react-router-dom';
import { Hero, Navbar} from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div>
          <Navbar />
          <Hero />
      </div>
   </BrowserRouter>
  )
}

export default App
