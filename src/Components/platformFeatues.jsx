import React from 'react';
import { Grid, Typography, Container, useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import { Slide, Fade, Zoom } from "react-awesome-reveal";

import shipping from "../images/shipping-removebg-preview.png";
import money from "../images/eaarn-removebg-preview.png";
// import eco from "../images/eco.png";

const FeatureCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  borderRadius: '16px',
  height: 'auto',
  minHeight: '400px',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
}));

const FeatureImage = styled('img')(({ theme }) => ({
  width: '180px',
  height: '180px',
  objectFit: 'cover',
  marginBottom: theme.spacing(2),
  borderRadius: '50%',
  [theme.breakpoints.up('md')]: {
    '&:hover': {
      transform: 'scale(1.03)'
    }
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#4141DA',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '3px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '3px'
  }
}));

function PlatformFeatures() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      title: "Affordable Shipping",
      description: "By using travelers as couriers,\nHatly provides a cheaper alternative\nto traditional shipping companies.",
      image: shipping,
      direction: "left"
    },
    {
      title: "Earn While You Travel",
      description: "Travelers can earn money effortlessly\nwithout much extra effort, making it\nan attractive option for travelers.",
      image: money,
      direction: "right"
    },
    // {
    //   title: "Eco-Friendly",
    //   description: "Since travelers are already going to their destinations, we reduce environmental impact compared to traditional shipping methods.",
    //   image: eco,
    //   direction: "left"
    // }
  ];

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 'auto',
      background: 'linear-gradient(to bottom, #f9f9ff 0%, #ffffff 100%)',
      py: { xs: 4, md: 6 }
    }}>
      <Container maxWidth="lg" sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Fade>
          <Box textAlign="center" mb={4}>
            <SectionTitle variant="h4" component="h2">
              Why We're Different
            </SectionTitle>
            <Typography variant="subtitle1" color="textSecondary" maxWidth="700px" margin="0 auto" mt={2}>
              Discover what makes Hatly unique
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={3} justifyContent="center" sx={{ 
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          alignItems: 'stretch'
        }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ 
              minWidth: 0,
              display: 'flex'
            }}>
              <Slide direction="right" cascade>
                <FeatureCard sx={{ width: '100%' }}>
                  <Zoom>
                    <Box sx={{ width: '100%' }}>
                      <FeatureImage src={feature.image} alt={feature.title} />
                    </Box>
                  </Zoom>
                  <Box textAlign="center" width="100%" sx={{ px: 1 }}>
                    <Fade direction="up">
                      <Typography variant="h5" component="h3" gutterBottom sx={{ 
                        fontWeight: 600,
                        color: '#4141DA',
                        mb: 2
                      }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="textSecondary" sx={{ 
                        lineHeight: 1.6,
                        mb: 2
                      }}>
                        {feature.description}
                      </Typography>
                    </Fade>
                  </Box>
                </FeatureCard>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PlatformFeatures;