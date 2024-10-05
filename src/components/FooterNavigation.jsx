import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import MainIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export default function SimpleBottomNavigation() {

  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
      <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
          <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Main"
            icon={<MainIcon />}
            onClick={() => navigate('/')}
          />
          <BottomNavigationAction
            label="Search"
            icon={<SearchIcon />}
            onClick={() => navigate('/search')}
          />
          <BottomNavigationAction
            label="Profile"
            icon={<AccountCircleIcon />}
            onClick={() => navigate('/profile')}
          />
        </BottomNavigation>
      </Box>
  );
}
