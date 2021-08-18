import React from 'react';

// import Global styles
import { GlobalStyle } from './GlobalStyles'

// import components
import Header from './components/Header/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      
      <GlobalStyle />
    </div>
  );
}

export default App;