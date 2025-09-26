// components/CameraFeature.js
import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box, IconButton } from '@mui/material';
import { Camera, FlipCameraIos, Close } from '@mui/icons-material';

const CameraFeature = ({ onClose }) => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [facingMode, setFacingMode] = useState('user');

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImage(null);
  };

  const switchCamera = () => {
    setFacingMode(prev => prev === 'user' ? 'environment' : 'user');
  };

  const saveImage = () => {
    // Here you can save the image or use it as album art
    console.log('Image captured:', image);
    onClose();
  };

  const videoConstraints = {
    facingMode: facingMode,
    width: 1280,
    height: 720
  };

  return (
    <Dialog open={true} maxWidth="md" fullWidth onClose={onClose}>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <span>Capture Album Art</span>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          {!image ? (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }}
            />
          ) : (
            <img src={image} alt="Captured" style={{ width: '100%', maxWidth: '500px', borderRadius: '8px' }} />
          )}
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            {!image ? (
              <>
                <Button
                  variant="contained"
                  startIcon={<Camera />}
                  onClick={capture}
                  color="primary"
                >
                  Capture
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<FlipCameraIos />}
                  onClick={switchCamera}
                >
                  Switch Camera
                </Button>
              </>
            ) : (
              <>
                <Button variant="outlined" onClick={retake}>
                  Retake
                </Button>
                <Button variant="contained" onClick={saveImage}>
                  Use as Album Art
                </Button>
              </>
            )}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CameraFeature;