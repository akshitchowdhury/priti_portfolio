import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import SpaIcon from '@mui/icons-material/Spa'; // Flower/lily icon

// Custom SpeedDial icon component
const CustomSpeedDialIcon = () => (
  <SpaIcon sx={{ color: '#D8A48F' }} /> // Beige-pink color
);

const actions = [
  { icon: <FileCopyIcon sx={{ color: '#D8A48F' }} />, name: 'Copy' },
  { icon: <SaveIcon sx={{ color: '#D8A48F' }} />, name: 'Save' },
  { icon: <PrintIcon sx={{ color: '#D8A48F' }} />, name: 'Print' },
  { icon: <ShareIcon sx={{ color: '#D8A48F' }} />, name: 'Share' },
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
        ariaLabel="SpeedDial controlled open example"
        sx={{ 
          position: 'absolute', 
          bottom: 16, 
          right: 16,
          '& .MuiFab-primary': {
            backgroundColor: '#F8EDEB', // Light beige-pink background
            '&:hover': {
              backgroundColor: '#F5CAC3', // Darker beige-pink on hover
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
            onClick={handleClose}
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