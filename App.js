import * as React from 'react';
import Navigation from './src/routes/Router';
import { AuthProvider } from './src/context/Auth';

function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}

export default App;