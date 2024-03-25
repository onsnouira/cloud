import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footerr from './components/Footerr';
import Title from './components/Title';
import About from './components/about/About';
import Paragraphe from './components/Paragraphe';
import Text from './components/Text';
import Contact from './components/contact/Contact';
import MapContainers from './components/MapContainers';

//root component for the application
function App() {
  return (
    <div className="App">
      {/* Display the component Navbar, Title, Pargraphe  */}
      <NavBar/>
      <Title/>
      <h2> INETRIOR DESIGN SERVICES</h2>
      <Paragraphe/> 
      {/* Display the component About, Text, MapContainers  */}
      <About/> 
      <Text/>
      <MapContainers/>
      {/* Display the component Contact ,Footer */}
      <Contact/>
      <Footerr/>
    </div>
  );
}

export default App;
