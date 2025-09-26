import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Chip,
  Box,
  Typography,
} from '@mui/material';

const genres = [
  'Pop', 'Rock', 'Hip Hop', 'Jazz', 'Classical', 'Electronic',
  'R&B', 'Country', 'Metal', 'Folk', 'Blues', 'Reggae',
  'Punk', 'Funk', 'Soul', 'Disco', 'House', 'Techno'
];

const GenrePopup = ({ onSelect }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const toggleGenre = (genre) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const handleSubmit = () => {
    if (selectedGenres.length > 0) {
      onSelect(selectedGenres);
    }
  };

  return (
    <Dialog open={true} maxWidth="md" fullWidth>
      <DialogTitle>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to EmoBeats!
        </Typography>
        <Typography variant="h6" align="center">
          Select your favorite music genres
        </Typography>
      </DialogTitle>
      
      <DialogContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mt: 2 }}>
          {genres.map(genre => (
            <Chip
              key={genre}
              label={genre}
              clickable
              color={selectedGenres.includes(genre) ? 'primary' : 'default'}
              onClick={() => toggleGenre(genre)}
              variant={selectedGenres.includes(genre) ? 'filled' : 'outlined'}
            />
          ))}
        </Box>
        
        <Typography variant="body2" align="center" sx={{ mt: 2, color: 'text.secondary' }}>
          Select at least 3 genres to get personalized recommendations
        </Typography>
      </DialogContent>
      
      <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          disabled={selectedGenres.length < 3}
          sx={{ px: 4 }}
        >
          Continue ({selectedGenres.length}/3+)
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GenrePopup;