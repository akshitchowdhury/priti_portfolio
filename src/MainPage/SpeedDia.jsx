import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpaIcon from '@mui/icons-material/Spa';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build'; // Skills
import WorkIcon from '@mui/icons-material/Work'; // Portfolio
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Contact
import { Link } from 'react-router-dom';

// Custom SpeedDial icon
const CustomSpeedDialIcon = () => (
  <SpaIcon sx={{ color: '#D8A48F' }} />
);

// Scroll handler
const handleScroll = (sectionId) => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Actions with section IDs
const actions = [
  { icon: <HomeIcon sx={{ color: '#D8A48F' }} />, name: 'Home', sectionId: 'home' },
  { icon: <BuildIcon sx={{ color: '#D8A48F' }} />, name: 'Skills', sectionId: 'skills' },
  { icon: <WorkIcon sx={{ color: '#D8A48F' }} />, name: 'Portfolio', sectionId: 'portfolio' },
  { icon: <ContactMailIcon sx={{ color: '#D8A48F' }} />, name: 'Contact', sectionId: 'contact' },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{
      transform: 'translateZ(0px)',
      flexGrow: 1,
      position: 'fixed',
      bottom: 150,
      left: 60,
      margin: '20px',
      zIndex: 1000,
    }}>
      <SpeedDial
        ariaLabel="Navigation SpeedDial"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          '& .MuiFab-primary': {
            backgroundColor: '#F8EDEB',
            '&:hover': {
              backgroundColor: '#F5CAC3',
            }
          }
        }}
        icon={<CustomSpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              <Link to="/"></Link>
              handleScroll(action.sectionId);
              handleClose();
            }}
            sx={{
              backgroundColor: '#F8EDEB',
              '&:hover': {
                backgroundColor: '#F5CAC3',
              }
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
