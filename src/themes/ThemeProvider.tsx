"use client";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const defaultTheme = createTheme({
  
});

export const DefaultThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};
