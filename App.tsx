import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useFonts, Lato_900Black, Lato_700Bold, Lato_400Regular } from '@expo-google-fonts/lato'
import AppLoading from 'expo-app-loading';

import theme from './src/global/styles/theme';

import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Lato_900Black,
    Lato_700Bold,
    Lato_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}


