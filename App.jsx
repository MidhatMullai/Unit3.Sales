import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import MenuIcon from '@mui/icons-material/Menu';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        <MenuIcon />
        <Typography variant='h1'>
          The Kings Restaurant
        </Typography>
        <Typography variant='body1'>
          sales obtain 21%
        </Typography>
      </Container>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        <PointOfSaleIcon />
        <Typography variant='h3'>
          431,225
        </Typography>
        <Typography variant='body1'>
          sales obtain 21%
        </Typography>
      </Container>

      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        <PersonAddIcon />
        <Typography variant='h3'>
          432441
        </Typography>
        <Typography variant='body1'>
          new clients 1%
        </Typography>
      </Container>

      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        <PointOfSaleIcon />
        <Typography variant='h3'>
          1325134
        </Typography>
        <Typography variant='body1'>
          traffic received%
        </Typography>
      </Container>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
        <TrafficIcon />
        <Typography variant='h3'>
          $59342.32
        </Typography>
        <Typography variant='body1'>
          revenue generated
        </Typography>
      </Container>
    </React.Fragment>
  );
}