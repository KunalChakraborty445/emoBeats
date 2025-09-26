import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  Home as HomeIcon,
  Search as SearchIcon,
  LibraryMusic as LibraryIcon,
  Camera as CameraIcon,
} from '@mui/icons-material';

const Sidebar = () => {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Search', icon: <SearchIcon />, path: '/search' },
    { text: 'Your Library', icon: <LibraryIcon />, path: '/library' },
    { text: 'Camera', icon: <CameraIcon />, path: '/camera' },
  ];

  return (
    <Box sx={{ width: 240, bgcolor: 'background.paper', height: '100vh' }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              '&.active': {
                bgcolor: 'action.selected',
                borderLeft: '4px solid',
                borderColor: 'primary.main',
              },
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;