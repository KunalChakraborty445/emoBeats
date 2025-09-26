import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography,
  IconButton 
} from '@mui/material';
import { PlayArrow, Favorite, MoreVert } from '@mui/icons-material';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for search results
  const searchResults = [
    {
      id: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      image: 'https://via.placeholder.com/150',
      duration: '3:20'
    },
    {
      id: 2,
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      album: 'After Hours',
      image: 'https://via.placeholder.com/150',
      duration: '3:35'
    },
    {
      id: 3,
      title: 'Levitating',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia',
      image: 'https://via.placeholder.com/150',
      duration: '3:23'
    },
    {
      id: 4,
      title: 'Don\'t Start Now',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia',
      image: 'https://via.placeholder.com/150',
      duration: '3:03'
    }
  ];

  const filteredResults = searchResults.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ flex: 1, p: 3, overflowY: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Search
      </Typography>
      
      <TextField
        fullWidth
        variant="outlined"
        placeholder="What do you want to listen to?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 3 }}
        InputProps={{
          sx: { borderRadius: 3, fontSize: '1.1rem' }
        }}
      />

      <Grid container spacing={3}>
        {filteredResults.map((track) => (
          <Grid item xs={12} sm={6} md={4} key={track.id}>
            <Card sx={{ display: 'flex', bgcolor: 'background.paper', transition: '0.3s', '&:hover': { bgcolor: 'action.hover' } }}>
              <CardMedia
                component="img"
                sx={{ width: 80, height: 80 }}
                image={track.image}
                alt={track.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography variant="h6" component="div">
                    {track.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {track.artist} • {track.album}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  <IconButton aria-label="play">
                    <PlayArrow />
                  </IconButton>
                  <IconButton aria-label="add to favorites">
                    <Favorite />
                  </IconButton>
                  <IconButton aria-label="more options">
                    <MoreVert />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Search;