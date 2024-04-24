import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import Me from './Me';
import imgProg from '../../../Asset/images/prog.jpg';
import imgSVG from '../../../Asset/images/patternSVG.svg';


const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Dashboard',
    description:
      'This item could provide a snapshot of the most important metrics or data points related to the product.',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Mobile integration',
    description:
      'This item could provide information about the mobile app version of the product.',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Available on all platforms',
    description:
      'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
  },
];

export default function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <>
    
    <Grid item xs={12} sx={{ display: { sm: 'flex' }, width: '100%' }}>
        <div>
                <Typography component="h2" variant="h4" color="text.primary" textAlign="center">
                  Welcome to MwaChe's Site
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: { xs: 2, sm: 4 }, mt: 2}}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                   sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
        </div>
      </Grid>
    
    <Container sx={{ py: { xs: 4, sm: 4 } }}>
      
      <Grid container spacing={6}>


      

{/* ..........................LEFT.................... */}
 
          <Grid
              item
              xs={12}
              md={6}
              sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
            >
            <Me/>
              

                {/* img ya bigSize */}
               
            </Grid>

{/* ............................RIGHT.................... */}
            <Grid item xs={12} md={6}>
              
              {/* box for iPhoneSize */}
              <Grid container item gap={2} sx={{ display: { xs: 'auto', sm: 'none' } }}>
                {items.map(({ title }, index) => (
                  <Chip
                    key={index}
                    label={title}
                    onClick={() => handleItemClick(index)}
                    sx={{
                      borderColor: (theme) => {
                        return selectedItemIndex === 'beige.light';
                      },
                      background: (theme) => {
                        return selectedItemIndex === 'secondary.dark';
                      },
                      backgroundColor: selectedItemIndex === 'secondary.dark',
                      '& .MuiChip-label': {
                        color: selectedItemIndex === index ? 'secondary.main' : '',
                      },
                    }}
                  />
                ))}
              </Grid>
              <Box
                component={Card}
                variant="outlined"
                sx={{
                  display: { xs: 'auto', sm: 'none' },
                  mt: 4,
                }}
              >                
                <Box
                  sx={{
                   minHeight: 280,
                  }}
                />
                <Box sx={{ px: 2, py: 2, backgroundColor: "#000" }}>
                  <Typography color="text.primary" variant="body2" fontWeight="bold">
                    {selectedFeature.title}
                  </Typography>
                  <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                    {selectedFeature.description}
                  </Typography>
                  <Link
                    color="beige"
                    variant="body2"
                    fontWeight="bold"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      '& > svg': { transition: '0.5s' },
                      '&:hover > svg': { transform: 'translateX(2px)' },
                    }}
                  >
                    <span>Learn more</span>
                    <ChevronRightRoundedIcon
                      fontSize="small"
                      sx={{ mt: '1px', ml: '2px' }}
                    />
                  </Link>
                </Box>
              </Box>


              {/* box for WebSite size */}
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
                useFlexGap
                sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
              >
                {items.map(({ icon, title, description }, index) => (
                  <Card
                    key={index}
                    variant="outlined"
                    component={Button}
                    onClick={() => handleItemClick(index)}
                    sx={{
                      p: 3,
                      height: 'fit-content',
                      width: '100%',
                      background: 'none',
                      backgroundColor:
                        selectedItemIndex === index ? 'action.selected' : undefined,
                      borderColor: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'beige.light'
                            : 'secondary.30';
                        }
                        return selectedItemIndex === index ? 'beige.dark' : 'secondary.40';
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        textAlign: 'left',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { md: 'center' },
                        gap: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          color: (theme) => {
                            if (theme.palette.mode === 'light') {
                              return selectedItemIndex === index
                                ? 'primary.main'
                                : 'grey.300';
                            }
                            return selectedItemIndex === index
                              ? 'primary.main'
                              : 'grey.700';
                          },
                        }}
                      >
                        {icon}
                      </Box>
                      <Box sx={{ textTransform: 'none' }}>
                        <Typography
                          color="text.primary"
                          variant="body2"
                          fontWeight="bold"
                        >
                          {title}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          variant="body2"
                          sx={{ my: 0.5 }}
                        >
                          {description}
                        </Typography>
                        <Link
                          color="primary"
                          variant="body2"
                          fontWeight="bold"
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            '& > svg': { transition: '0.2s' },
                            '&:hover > svg': { transform: 'translateX(2px)' },
                          }}
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                        >
                          <span>Learn more</span>
                          <ChevronRightRoundedIcon
                            fontSize="small"
                            sx={{ mt: '1px', ml: '2px' }}
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Stack>
            </Grid>

       
        
      </Grid>
    </Container>
    </>
  );
}