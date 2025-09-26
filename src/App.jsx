import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import Search from './components/Search';
import Library from './components/Library';
import Camera from './components/Camera';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import GenrePopup from './components/GenrePopup';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1db954',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
  },
});

function App() {
  const [currentSong, setCurrentSong] = useState(null);
  const [showGenrePopup, setShowGenrePopup] = useState(false);
  const [userPreferences, setUserPreferences] = useState(null);

  useEffect(() => {
    // Check if user has already set preferences
    const preferences = localStorage.getItem('spotifyClonePreferences');
    if (!preferences) {
      setShowGenrePopup(true);
    } else {
      setUserPreferences(JSON.parse(preferences));
    }
  }, []);

  const handleGenreSelection = (selectedGenres) => {
    const preferences = { genres: selectedGenres, setupComplete: true };
    localStorage.setItem('spotifyClonePreferences', JSON.stringify(preferences));
    setUserPreferences(preferences);
    setShowGenrePopup(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <div className="app">
          {showGenrePopup && <GenrePopup onSelect={handleGenreSelection} />}
          
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home userPreferences={userPreferences} />} />
              <Route path="/search" element={<Search />} />
              <Route path="/library" element={<Library />} />
              <Route path="/camera" element={<Camera />} />
            </Routes>
          </div>
          
          <Player currentSong={currentSong} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;