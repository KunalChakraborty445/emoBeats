import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton
} from '@mui/material';
import { PlayArrow, Favorite } from '@mui/icons-material';

const Home = ({ userPreferences }) => {
  // Mock data based on user preferences
  const recommendedPlaylists = [
    {
      id: 1,
      name: 'Today\'s Top Hits',
      description: 'The most played songs right now',
      image: 'https://via.placeholder.com/200',
      color: '#1e3a8a'
    },
    {
      id: 2,
      name: 'Chill Hits',
      description: 'Kick back to the best new and recent chill hits',
      image: 'https://via.placeholder.com/200',
      color: '#0f766e'
    },
    {
      id: 3,
      name: 'Rock Classics',
      description: 'Rock legends & epic songs that continue to inspire generations',
      image: 'https://via.placeholder.com/200',
      color: '#7c2d12'
    },
    {
      id: 4,
      name: 'Mood Booster',
      description: 'Get happy with today\'s dose of feel-good songs!',
      image: 'https://via.placeholder.com/200',
      color: '#701a75'
    }
  ];

  const recentlyPlayed = [
    {
      id: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      image: 'https://via.placeholder.com/80'
    },
    {
      id: 2,
      title: 'Levitating',
      artist: 'Dua Lipa',
      image: 'https://via.placeholder.com/80'
    },
    {
      id: 3,
      title: 'Stay',
      artist: 'The Kid LAROI, Justin Bieber',
      image: 'https://via.placeholder.com/80'
    }
  ];

  return (
    <Box sx={{ flex: 1, p: 3, overflowY: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Good evening
      </Typography>

      {/* Recently Played */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Recently played
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {recentlyPlayed.map((track) => (
          <Grid item xs={12} sm={6} md={4} key={track.id}>
            <Card sx={{ display: 'flex', bgcolor: 'background.paper', transition: '0.3s', '&:hover': { bgcolor: 'action.hover' } }}>
              <CardMedia
                component="img"
                sx={{ width: 80, height: 80 }}
                image={track.image}
                alt={track.title}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, pl: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6">{track.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{track.artist}</Typography>
                </Box>
                <IconButton>
                  <PlayArrow />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recommended Playlists */}
      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        Made for you
      </Typography>
      <Grid container spacing={3}>
        {recommendedPlaylists.map((playlist) => (
          <Grid item xs={12} sm={6} md={3} key={playlist.id}>
            <Card sx={{ 
              bgcolor: playlist.color + '20', 
              cursor: 'pointer',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.05)' }
            }}>
              <CardMedia
                component="img"
                height="200"
                image={playlist.image}
                alt={playlist.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {playlist.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {playlist.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Show genre-based recommendations if user has preferences */}
      {userPreferences && userPreferences.genres && (
        <>
          <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
            Based on your tastes: {userPreferences.genres.slice(0, 3).join(', ')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We'll show personalized recommendations here based on your selected genres.
          </Typography>
        </>
      )}
    </Box>
  );
};

export default Home;