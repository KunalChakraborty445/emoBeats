// components/Player.js
import React from 'react';
import { Box, Slider, Typography, IconButton } from '@mui/material';
import { PlayArrow, Pause, SkipNext, SkipPrevious, VolumeUp } from '@mui/icons-material';

const Player = ({ currentSong }) => {
  if (!currentSong) return null;

  return (
    <Box sx={{ 
      position: 'fixed', 
      bottom: 0, 
      left: 0, 
      right: 0, 
      bgcolor: 'background.paper',
      borderTop: '1px solid #333',
      p: 2,
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }}>
      {/* Song Info */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 200 }}>
        <img 
          src={currentSong.cover} 
          alt={currentSong.title}
          style={{ width: 56, height: 56, borderRadius: 4 }}
        />
        <Box>
          <Typography variant="body1">{currentSong.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {currentSong.artist}
          </Typography>
        </Box>
      </Box>

      {/* Controls */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton>
            <SkipPrevious />
          </IconButton>
          <IconButton size="large">
            <PlayArrow />
          </IconButton>
          <IconButton>
            <SkipNext />
          </IconButton>
        </Box>
        <Slider defaultValue={30} sx={{ width: '100%', maxWidth: 400 }} />
      </Box>

      {/* Volume */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 120 }}>
        <VolumeUp />
        <Slider defaultValue={50} sx={{ width: 100 }} />
      </Box>
    </Box>
  );
};

export default Player;