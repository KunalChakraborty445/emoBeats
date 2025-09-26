import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Button, Box, Typography, Card, CardMedia } from '@mui/material';
import { 
  CameraAlt as CameraIcon, 
  Refresh as RefreshIcon, 
  Check as CheckIcon 
} from '@mui/icons-material';

const Camera = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [facingMode, setFacingMode] = useState('user');

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  const switchCamera = () => {
    setFacingMode(prev => (prev === 'user' ? 'environment' : 'user'));
  };

  const videoConstraints = {
    facingMode: facingMode,
    width: 720,
    height: 720,
  };

  return (
    <Box sx={{ p: 3, maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        Camera
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Scan album covers or take profile pictures
      </Typography>

      <Box sx={{ mt: 3 }}>
        {imgSrc ? (
          <Card>
            <CardMedia
              component="img"
              image={imgSrc}
              alt="Captured photo"
              sx={{ maxHeight: 400 }}
            />
          </Card>
        ) : (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        )}

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
          {imgSrc ? (
            <>
              <Button
                variant="outlined"
                startIcon={<RefreshIcon />}
                onClick={retake}
              >
                Retake
              </Button>
              <Button
                variant="contained"
                startIcon={<CheckIcon />}
                onClick={() => alert('Photo saved!')}
              >
                Use Photo
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                onClick={switchCamera}
                startIcon={<CameraIcon />}
              >
                Switch Camera
              </Button>
              <Button
                variant="contained"
                onClick={capture}
                startIcon={<CameraIcon />}
              >
                Capture Photo
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Camera;