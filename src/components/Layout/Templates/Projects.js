import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Projects() {
  
const today = ()=> {
  return new Date().getFullYear()
}

  return (
    <Grid item>
      
            <Typography component="h2" variant="h2" textAlign={"center"} >
              Projects
            </Typography>
            <Typography variant="h5" textAlign={"center"} color="text.secondary">
            {today()}
            </Typography>
            <Typography variant="h4" paragraph color="text.secondary" >
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. 
            Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, 
            tell
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. 
            Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, 
            tell
            </Typography>
         

    </Grid>
  );
}


export default Projects;