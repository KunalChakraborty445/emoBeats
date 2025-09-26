// components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Home, Search, LibraryMusic, CameraAlt } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ onCameraOpen }) => {
  const location = useLocation();

  const menuItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Search', icon: <Search />, path: '/search' },
    { text: 'Your Library', icon: <LibraryMusic />, path: '/library' },
  ];

  return (
    <Box sx={{ width: 240, bgcolor: 'background.paper', height: '100vh' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" color="primary">
          Spotify Clone
        </Typography>
      </Box>
      
      <List>
        {menuItems.map(item => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        
        <ListItem button onClick={onCameraOpen}>
          <ListItemIcon>
            <CameraAlt />
          </ListItemIcon>
          <ListItemText primary="Capture Art" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;