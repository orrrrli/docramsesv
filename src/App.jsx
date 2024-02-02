import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Mision from './components/vandm';
import Experience from './components/experience';
import Images from './components/images';
import ContactCard from './components/contactcard';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Hero/>
        <Mision/>
        <Experience/>
        <Images/>
        <ContactCard/>
    </BrowserRouter>  
  );
}

export default App;
