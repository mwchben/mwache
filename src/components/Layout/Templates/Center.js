import * as React from 'react';
import Projects from './Projects';
import Container from '@mui/material/Container';

export default function Center() {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Projects/>
      </Container>
    </React.Fragment>
  );
}