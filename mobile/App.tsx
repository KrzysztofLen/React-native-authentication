import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { setNavigator } from './src/routes/NavigationService';
import Navigation from './src/routes/Navigation';
import { Provider as AuthProvider } from './src/context/AuthContext';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200EE',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider>
      <AuthProvider>
        <Navigation ref={(navigator) => setNavigator(navigator)} />
      </AuthProvider>
    </PaperProvider>
  );
}
