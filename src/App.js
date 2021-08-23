import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

// import Global styles
import { GlobalStyle } from './GlobalStyles'

// import components
import Header from './components/Header/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/:movieId' element={ <Movie /> } />
        <Route path='/*' element={ <NotFound /> } />
      </Routes>      
      <GlobalStyle />
    </Router>
  );
}

export default App;