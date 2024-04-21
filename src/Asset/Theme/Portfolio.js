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
      MuiAccordionSummary: {
        styleOverrides: {
          root: ({ theme }) => ({
            border: 'none',
            borderRadius: 8,
            '&:hover': { backgroundColor: secondary[20] },
            ...(theme.palette.mode === 'dark' && {
              '&:hover': { backgroundColor: secondary[30] },
            }),
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
              outline: `3px solid ${alpha(beige[50], 0.5)}`,
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
            ...(ownerState.size === 'small' && {
              maxHeight: '32px',
            }),
            ...(ownerState.size === 'medium' && {
              height: '40px',
            }),
            
            ...(ownerState.variant === 'outlined' && {
              backgroundColor: alpha(beige[20], 0.1),
              borderColor: beige[20],
              color: beige[30],
              '&:hover': {
                backgroundColor: alpha(beige[20], 0.3),
                borderColor: beige[20],
              },
            }),
            ...(ownerState.variant === 'text' && {
              color: beige[30],
              '&:hover': {
                backgroundColor: alpha(beige[20], 0.3),
                borderColor: beige[20],
              },
            }),
            ...(theme.palette.mode === 'dark' && {
              ...(ownerState.variant === 'outlined' && {
                backgroundColor: alpha(beige[30], 0.1),
                borderColor: beige[40],
                color: beige[20],
                '&:hover': {
                  backgroundColor: alpha(beige[30], 0.3),
                  borderColor: beige[40],
                },
              }),
              ...(ownerState.variant === 'text' && {
                color: beige[20],
                '&:hover': {
                  backgroundColor: alpha(beige[30], 0.3),
                  borderColor: beige[40],
                },
              }),
            }),
          }),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme, ownerState }) => ({
            backgroundColor: secondary[50],
            borderRadius: 5,
            border: `1px solid ${alpha(secondary[20], 0.8)}`,
            boxShadow: 'none',
            transition: 'background-color, border, 80ms ease',
            ...(ownerState.variant === 'outlined' && {
              background: `linear-gradient(to bottom, #FFF, ${secondary[50]})`,
              '&:hover': {
                borderColor: beige[20],
                boxShadow: `0 0 24px ${beige[10]}`,
              },
            }),
            ...(theme.palette.mode === 'dark' && {
              backgroundColor: alpha(secondary[40], 0.6),
              border: `1px solid ${alpha(secondary[40], 0.3)}`,
              ...(ownerState.variant === 'outlined' && {
                background: `linear-gradient(to bottom, ${secondary[50]}, ${alpha(
                  secondary[40],
                  0.5,
                )})`,
                '&:hover': {
                  borderColor: beige[40],
                  boxShadow: `0 0 24px ${beige[40]}`,
                },
              }),
            }),
          }),
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ theme }) => ({
            alignSelf: 'center',
            py: 1.5,
            px: 0.5,
            background: `linear-gradient(to bottom right, ${beige[50]}, ${beige[10]})`,
            border: '1px solid',
            borderColor: `${alpha(beige[30], 0.3)}`,
            fontWeight: '30',
            '&:hover': {
              backgroundColor: beige[30],
            },
            '&:focus-visible': {
              borderColor: beige[40],
              backgroundColor: beige[20],
            },
            '& .MuiChip-label': {
              color: beige[30],
            },
            '& .MuiChip-icon': {
              color: beige[30],
            },
            ...(theme.palette.mode === 'dark' && {
              background: `linear-gradient(to bottom right, ${beige[40]}, ${beige[50]})`,
              borderColor: `${alpha(beige[30], 0.5)}`,
              '&:hover': {
                backgroundColor: beige[30],
              },
              '&:focus-visible': {
                borderColor: beige[20],
                backgroundColor: beige[30],
              },
              '& .MuiChip-label': {
                color: beige[20],
              },
              '& .MuiChip-icon': {
                color: beige[20],
              },
            }),
          }),
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderColor: `${alpha(secondary[20], 0.8)}`,
            ...(theme.palette.mode === 'dark' && {
              borderColor: `${alpha(secondary[40], 0.4)}`,
            }),
          }),
        },
      },
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
              backgroundColor: beige[20],
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
            backgroundColor: secondary[10],
            ...(theme.palette.mode === 'dark' && {
              backgroundColor: alpha(secondary[50], 0.6),
            }),
          }),
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: ({ theme }) => ({
            boxSizing: 'border-box',
            width: 36,
            height: 24,
            padding: 0,
            transition: 'background-color 100ms ease-in',
            '&:hover': {
              '& .MuiSwitch-track': {
                backgroundColor: beige[30],
              },
            },
            '& .MuiSwitch-switchBase': {
              '&.Mui-checked': {
                transform: 'translateX(13px)',
              },
            },
            '& .MuiSwitch-track': {
              borderRadius: 50,
            },
            '& .MuiSwitch-thumb': {
              boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#FFF',
              width: 16,
              height: 16,
              margin: 2,
            },
            ...(theme.palette.mode === 'dark' && {
              width: 36,
              height: 24,
              padding: 0,
              transition: 'background-color 100ms ease-in',
              '&:hover': {
                '& .MuiSwitch-track': {
                  backgroundColor: beige[30],
                },
              },
              '& .MuiSwitch-switchBase': {
                '&.Mui-checked': {
                  transform: 'translateX(13px)',
                },
              },
              '& .MuiSwitch-thumb': {
                boxShadow: '0 0 2px 2px rgba(0, 0, 0, 0.2)',
                backgroundColor: '#FFF',
                width: 16,
                height: 16,
                margin: 2,
              },
            }),
          }),
          switchBase: {
            height: 24,
            width: 24,
            padding: 0,
            color: '#fff',
            '&.Mui-checked + .MuiSwitch-track': {
              opacity: 1,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: ({ theme }) => ({
            '& label .Mui-focused': {
              color: 'white',
            },
            '& .MuiInputBase-input': {
              boxSizing: 'border-box',
              '&::placeholder': {
                opacity: 0.7,
              },
            },
            '& .MuiOutlinedInput-root': {
              boxSizing: 'border-box',
              minWidth: 280,
              minHeight: 40,
              height: '100%',
              borderRadius: '10px',
              border: '1px solid',
              borderColor: secondary[20],
              transition: 'border-color 120ms ease-in',
              '& fieldset': {
                border: 'none',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                background: `${alpha('#FFF', 0.3)}`,
              },
              '&:hover': {
                borderColor: beige[20],
              },
              '&.Mui-focused': {
                borderColor: beige[30],
                outline: '4px solid',
                outlineColor: beige[20],
              },
            },
            ...(theme.palette.mode === 'dark' && {
              '& .MuiOutlinedInput-root': {
                boxSizing: 'border-box',
                minWidth: 280,
                minHeight: 40,
                height: '100%',
                borderRadius: '10px',
                border: '1px solid',
                borderColor: secondary[30],
                transition: 'border-color 120ms ease-in',
                '& fieldset': {
                  border: 'none',
                  boxShadow: ' 0px 2px 4px rgba(0, 0, 0, 0.4)',
                  background: `${alpha(secondary[40], 0.4)}`,
                },
                '&:hover': {
                  borderColor: beige[20],
                },
                '&.Mui-focused': {
                  borderColor: beige[30],
                  outline: '4px solid',
                  outlineColor: alpha(beige[30], 0.5),
                },
              },
            }),
          }),
        },
      },
    },
  };
}