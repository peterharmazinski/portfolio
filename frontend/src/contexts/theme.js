import { createContext, useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { createTheme, ThemeProvider} from "@mui/material/styles";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: (e) => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        e.preventDefault();
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                
                background: {
                  default: '#ededed'
                },
                text: {
                  default: 'black'
                }
              }
            : {
                // palette values for dark mode
                
                background: {
                  default: '#111314',
                  secondary: '#1b1e20'
                },
                text: {
                  default: 'white'
                }
              }),
        },
      }));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
