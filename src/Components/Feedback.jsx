import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Feedback = () => {
  const [formData, setFormData] = useState({
    description: '',
    images: []
  });
  const [previews, setPreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const imagePromises = files.map(file => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64String = reader.result.split(',')[1];
            resolve({
              data: base64String,
              preview: URL.createObjectURL(file)
            });
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(imagePromises).then(images => {
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, ...images.map(img => img.data)]
        }));
        setPreviews(prev => [...prev, ...images.map(img => img.preview)]);
      });
    }
  };

  const handleRemovePhoto = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
    setPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://hatly-api.onrender.com/api/v2/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Feedback sent successfully!');
        setFormData({
          description: '',
          images: []
        });
        setPreviews([]);
      } else {
        alert('Failed to send feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      alert('An error occurred while sending feedback.');
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Send Us Your Feedback
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            multiline
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
            margin="normal"
          />
          
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            sx={{ mt: 2, mb: 2 }}
          >
            Upload Photos
            <VisuallyHiddenInput 
              type="file" 
              onChange={handlePhotoChange} 
              accept="image/*" 
              multiple 
            />
          </Button>

          {previews.length > 0 && (
            <Box sx={{ mt: 2, mb: 2, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {previews.map((preview, index) => (
                <Box key={index} sx={{ position: 'relative' }}>
                  <img 
                    src={preview} 
                    alt={`Preview ${index + 1}`} 
                    style={{ 
                      maxWidth: '200px', 
                      maxHeight: '200px',
                      objectFit: 'cover',
                      borderRadius: '4px'
                    }} 
                  />
                  <IconButton
                    size="small"
                    onClick={() => handleRemovePhoto(index)}
                    sx={{
                      position: 'absolute',
                      top: -8,
                      right: -8,
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      }
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3 }}
          >
            Send Feedback
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Feedback; 