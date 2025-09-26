// components/Home.js
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';

const Home = ({ onSongSelect }) => {
  const playlists = [
    {
      id: 1,
      title: 'Today\'s Hits',
      description: 'Latest trending songs',
      cover: 'https://via.placeholder.com/300',
      songs: [
        { id: 1, title: 'Song 1', artist: 'Artist 1', cover: 'https://via.placeholder.com/300' },
        { id: 2, title: 'Song 2', artist: 'Artist 2', cover: 'https://via.placeholder.com/300' }
      ]
    },
    // Add more playlists...
  ];

  return (
    <div style={{ padding: '20px', flex: 1 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Good evening</Typography>
      
      <Grid container spacing={3}>
        {playlists.map(playlist => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={playlist.id}>
            <Card sx={{ bgcolor: 'background.paper', cursor: 'pointer' }}>
              <CardMedia
                component="img"
                height="140"
                image={playlist.cover}
                alt={playlist.title}
              />
              <CardContent>
                <Typography variant="h6">{playlist.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {playlist.description}
                </Typography>
                <IconButton 
                  onClick={() => onSongSelect(playlist.songs[0])}
                  color="primary"
                  sx={{ mt: 1 }}
                >
                  <PlayArrow />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;