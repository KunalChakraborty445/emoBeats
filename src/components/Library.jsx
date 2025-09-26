import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Chip,
  Tabs,
  Tab
} from '@mui/material';
import { PlayArrow, Favorite, MoreVert, AccessTime } from '@mui/icons-material';

const Library = () => {
  const [tabValue, setTabValue] = useState(0);

  // Mock library data
  const playlists = [
    {
      id: 1,
      name: 'Liked Songs',
      description: '123 songs',
      image: 'https://via.placeholder.com/80',
      type: 'playlist'
    },
    {
      id: 2,
      name: 'Recently Played',
      description: 'Last played today',
      image: 'https://via.placeholder.com/80',
      type: 'playlist'
    },
    {
      id: 3,
      name: 'Discover Weekly',
      description: 'Your weekly mixtape',
      image: 'https://via.placeholder.com/80',
      type: 'playlist'
    }
  ];

  const artists = [
    {
      id: 1,
      name: 'The Weeknd',
      followers: '40.2M followers',
      image: 'https://via.placeholder.com/80',
      type: 'artist'
    },
    {
      id: 2,
      name: 'Dua Lipa',
      followers: '35.7M followers',
      image: 'https://via.placeholder.com/80',
      type: 'artist'
    }
  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ flex: 1, p: 3, overflowY: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Your Library
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Playlists" />
        <Tab label="Artists" />
        <Tab label="Albums" />
      </Tabs>

      {tabValue === 0 && (
        <List>
          {playlists.map((item) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <Box>
                  <IconButton edge="end" aria-label="play">
                    <PlayArrow />
                  </IconButton>
                  <IconButton edge="end" aria-label="more">
                    <MoreVert />
                  </IconButton>
                </Box>
              }
              sx={{ 
                '&:hover': { bgcolor: 'action.hover', borderRadius: 2 },
                mb: 1 
              }}
            >
              <ListItemAvatar>
                <Avatar src={item.image} variant="square" sx={{ width: 60, height: 60 }} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={item.description}
                primaryTypographyProps={{ variant: 'h6' }}
              />
              <Chip label="Playlist" variant="outlined" size="small" />
            </ListItem>
          ))}
        </List>
      )}

      {tabValue === 1 && (
        <List>
          {artists.map((artist) => (
            <ListItem
              key={artist.id}
              secondaryAction={
                <Box>
                  <IconButton edge="end" aria-label="follow">
                    <Favorite />
                  </IconButton>
                  <IconButton edge="end" aria-label="more">
                    <MoreVert />
                  </IconButton>
                </Box>
              }
              sx={{ 
                '&:hover': { bgcolor: 'action.hover', borderRadius: 2 },
                mb: 1 
              }}
            >
              <ListItemAvatar>
                <Avatar src={artist.image} sx={{ width: 60, height: 60 }} />
              </ListItemAvatar>
              <ListItemText
                primary={artist.name}
                secondary={artist.followers}
                primaryTypographyProps={{ variant: 'h6' }}
              />
              <Chip label="Artist" variant="outlined" size="small" />
            </ListItem>
          ))}
        </List>
      )}

      {tabValue === 2 && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No albums saved yet
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Library;