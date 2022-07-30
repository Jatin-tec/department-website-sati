import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import GavelIcon from '@mui/icons-material/Gavel';
import HomeIcon from '@mui/icons-material/Home';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";
import "./style.css";

const actions = [
  { icon: <SchoolIcon />, name: 'Attendence', to: '/Attendence', },
  { icon: <GroupIcon />, name: 'Classes', to: '/classes', },
  { icon: <GavelIcon />, name: 'Evalute', to: '/Evalute', },
  { icon: <HomeIcon />, name: 'Home', to: '/', },
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()

  return (
    <span className="Navigation-menu">
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => {navigate(action.to)}}
          />
        ))
        }
      </SpeedDial>
    </Box>
    </span>
  );
}
