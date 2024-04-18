import * as React from 'react';
import { Box,Grid } from '@mui/material';
import Container from '@mui/material/Container';

export default function Center() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc' }} />
        <Grid container spacing={2}>
        <Grid bgcolor={"blue"} paddingY={5} textAlign={'center'} md={8} xs={12}>
          xs=8
        </Grid>
        <Grid  bgcolor={"yellow"}  md={4} xs={12}>
          xs=4
        </Grid>
        <Grid  bgcolor={"green"}  xs={4}>
          xs=4
        </Grid>
        <Grid  bgcolor={"cyan"}  xs={8}>
          xs=8
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
}