import { alpha } from '@mui/material/styles';

export const beige = {
  10:  '#F8FFF8',
  20:  '#F7FBEA',
  30:  '#ECF5CE',
  40:  '#D8E9A8',
  50:  '#A1B173',
};

export const secondary = {
  10: '#A5D294',
  20: '#6DBB88',
  30: '#1FA381',
  40: '#008A7E',
  50: '#00717C',
};


const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      light: beige[20],
      main: beige[40],
      dark: beige[50],
      contrastText: beige[50],
      ...(mode === 'dark' && {
        contrastText: beige[10],
        light: beige[30],
        main: beige[40],
        dark: beige[50],
      }),
    },
    secondary: {
      light: secondary[10],
      main: secondary[30],
      dark: secondary[40],
      ...(mode === 'dark' && {
        light: secondary[20],
        main: secondary[30],
        dark: secondary[50],
      }),
    },
    warning: {
      main: '#F3E297',
      dark: '#FFD890',
    },
    error: {
      main: '#F09464',
      dark: '#B46133',
    },
    success: {
      main: "#1ff316",
      dark: "#475e0a",
    },
    divider: "#A6B779",
    background: {
      default: '#fff',
      paper: "#77874C",
    },
    text: {
      primary: beige[40],
      secondary: beige[50],
    },
    action: {
      selected: `${alpha(secondary[30], 0.2)}`,
    },
  },

  typography: {
    fontFamily: ['"Inter", "sans-serif","Pacifico"'].join(','),
    h1: {
      fontSize: 60,
      fontWeight: 30,
      lineHeight: 78 / 70,
      letterSpacing: -0.2,
    },
    h2: {
      fontSize: 48,
      fontWeight: 30,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 42,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 36,
      fontWeight: 30,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 20,
      fontWeight: 30,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontWeight: 30,
      fontSize: 15,
    },
    body2: {
      fontWeight: 30,
      fontSize: 14,
    },
    caption: {
      fontWeight: 30,
      fontSize: 12,
    },
  },
});

export default function Portfolio(mode) {
  return {
    ...getDesignTokens(mode),
    components: {
      MuiAccordion: {
        defaultProps: {
          elevation: 0,
          disableGutters: true,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            padding: 8,
            overflow: 'clip',
            backgroundColor: '#fff',
            border: '1px solid',
            borderColor: secondary[10],
            ':before': {
              backgroundColor: 'transparent',
            },
            '&:first-of-type': {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            },
            '&:last-of-type': {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
          }),
        },
      },
      
      MuiAccordionDetails: {
        styleOverrides: {
          root: { mb: 20, border: 'none' },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: '10px',
            '& .Mui-selected': {
              color: beige[30],
            },
          }),
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            padding: '12px 16px',
            textTransform: 'none',
            borderRadius: '10px',
            fontWeight: 30,
          }),
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
          disableRipple: true,
        },
        styleOverrides: {
          root: {
            boxSizing: 'border-box',
            transition: 'all 100ms ease-in',
            '&:focus-visible': {
              outline: `3px solid ${(beige[0])}`,
              outlineOffset: '2px',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            boxSizing: 'border-box',
            boxShadow: 'none',
            borderRadius: '10px',
            textTransform: 'none',
            '&:active': {
              transform: 'scale(0.98)',
            },     
           
            ...(ownerState.variant === 'text' && {
              color: beige[50],
              '&:hover': {
                backgroundColor: "none",
                borderColor: "#1ff316",
              },
            }),
            
          }),
        },
      },
      // MuiCard: {
      //   styleOverrides: {
      //     root: ({ theme, ownerState }) => ({
      //       backgroundColor: secondary[50],
      //       borderRadius: 5,
      //       border: `1px solid ${secondary[20]}`,
      //       boxShadow: 'none',
      //       transition: 'background-color, border, 80ms ease',
      //       ...(theme.palette.mode === 'dark' && {
      //         backgroundColor: alpha(secondary[40], 0.6),
      //         border: `1px solid ${alpha(secondary[40], 0.3)}`,
      //         ...(ownerState.variant === 'outlined' && {
      //           background: `linear-gradient(to bottom, ${secondary[50]}, ${alpha(
      //             secondary[40],
      //             0.5,
      //           )})`,
      //           '&:hover': {
      //             borderColor: beige[40],
      //             boxShadow: `0 0 24px ${beige[40]}`,
      //           },
      //         }),
      //       }),
      //     }),
      //   },
      // },
      
      
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
        styleOverrides: {
          root: ({ theme }) => ({
            color: beige[30],
            fontWeight: 30,
            position: 'relative',
            textDecoration: 'none',
            '&::before': {
              content: '""',
              position: 'absolute',
              width: 0,
              height: '1px',
              bottom: 0,
              left: 0,
              backgroundColor: "#1ff316",
              opacity: 0.7,
              transition: 'width 0.3s ease, opacity 0.3s ease',
            },
            '&:hover::before': {
              width: '100%',
              opacity: 1,
            },
            ...(theme.palette.mode === 'dark' && {
              color: beige[20],
            }),
          }),
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: '99px',
            color: secondary[30],
            fontWeight: 30,
            ...(theme.palette.mode === 'dark' && {
              color: secondary[20],
            }),
          }),
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundImage: 'none',
            backgroundColor: "none",
            
          }),
        },
      },
      
    },
  };
}