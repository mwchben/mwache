import * as React from 'react';
import Container from '@mui/material/Container';
import Sections from './Sections';

export default function Center() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Sections/>
      </Container>
    </React.Fragment>
  );
}