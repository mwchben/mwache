import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Me from './Me';
import { Box, Link, Pagination} from '@mui/material';
import Projects from './Projects';


// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Lio Website',
//     link: '@bkristastucchio',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Dashboard',
//     link: '@hjrc33',
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Mobile integration',
//     link: `https://images.unsplash.com/photo-1558642452-9d2a7deb7f62`,
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Available on all platforms',
//     link: '@tjdragotta',
//   } 
// ];

export default function Sections() {
 

  return (
    <>
    
    <Grid item xs={12} sx={{ display: { sm: 'flex' }, width: '100%' }}>
        
   
        <div>
        
                <Typography component="h2" variant="h4" color="text.primary" textAlign="center">
                  Welcome to MwaChe's Site
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontFamily={"Hi Melody"}
                  sx={{ mb: { xs: 2, sm: 4 }, mt: 2, p: 3}}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Utusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrm.
                </Typography>
        </div>
      </Grid>
    
<Container sx={{ py: { xs: 4, sm: 4 } }}>
      
  <Grid container spacing={6}>
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
    >
      <Me/>     
    </Grid>   
    <Grid
      item
      xs={12}
      md={6}
      sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
    >
      <Projects/>     
    </Grid>         
  </Grid>
</Container>
    </>
  );
}


