import React from 'react';
import '../App.css';

// import icons 
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CallIcon from '@mui/icons-material/Call';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

// Footer component displaying copyright information and icons
const Footerr = () => {
    return (
    <div>
        <footer className="bg-dark text-light text-center py-3">
            <p>&copy; 2024 MARWA BOUKHRIS</p>
            <CallIcon/>
            <InstagramIcon />
            <FacebookIcon/>
            <TwitterIcon/>
            <AddLocationAltIcon/>
        </footer>
    </div>
)
}

export default Footerr ;


