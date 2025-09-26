import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Slider,
  IconButton,
  Typography,
  Card,
  CardMedia
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  SkipNext,
  SkipPrevious,
  VolumeUp,
  Shuffle,
  Repeat,
  Favorite
} from '@mui/icons-material';

const Player = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

  // Mock current song data
  const song = currentSong || {
    id: 1,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    image: 'https://via.placeholder.com/60',
    duration: 200 // in seconds
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = (event, newValue) => {
    setCurrentTime(newValue);
    if (audioRef.current) {
      audioRef.current.currentTime = newValue;
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    if (audioRef.current) {
      audioRef.current.volume = newValue / 100;
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card sx={{ 
      position: 'fixed', 
      bottom: 0, 
      left: 0, 
      right: 0, 
      bgcolor: 'background.paper',
      borderTop: 1,
      borderColor: 'divider',
      borderRadius: 0
    }}>
      {/* Hidden audio element for playback */}
      <audio
        ref={audioRef}
        src="/api/audio" // This would be your actual audio source
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onEnded={() => setIsPlaying(false)}
      />

      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        {/* Song Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <CardMedia
            component="img"
            sx={{ width: 60, height: 60, mr: 2 }}
            image={song.image}
            alt={song.title}
          />
          <Box>
            <Typography variant="body1" fontWeight="bold">
              {song.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {song.artist}
            </Typography>
          </Box>
          <IconButton sx={{ ml: 2 }}>
            <Favorite />
          </IconButton>
        </Box>

        {/* Player Controls */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton>
              <Shuffle />
            </IconButton>
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton 
              onClick={handlePlayPause}
              sx={{ 
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' }
              }}
            >
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton>
              <SkipNext />
            </IconButton>
            <IconButton>
              <Repeat />
            </IconButton>
          </Box>

          {/* Progress Bar */}
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
            <Typography variant="caption" color="text.secondary">
              {formatTime(currentTime)}
            </Typography>
            <Slider
              value={currentTime}
              max={song.duration}
              onChange={handleTimeUpdate}
              sx={{ flex: 1 }}
              size="small"
            />
            <Typography variant="caption" color="text.secondary">
              {formatTime(song.duration)}
            </Typography>
          </Box>
        </Box>

        {/* Volume Control */}
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
          <VolumeUp sx={{ mr: 1 }} />
          <Slider
            value={volume}
            onChange={handleVolumeChange}
            sx={{ width: 100 }}
            size="small"
          />
        </Box>
      </Box>
    </Card>
  );
};

export default Player;