import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';
import '../App.css';

// Navbar component and import icons
function NavBar() {
  return (
    <Container>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          < CameraOutdoorIcon/>
          <Navbar.Brand href="#"  className="text-light">INTERIOR DESIGN</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;