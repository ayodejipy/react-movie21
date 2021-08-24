import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// import Global styles
import { GlobalStyle } from './GlobalStyles'
// Context
import UserProvider from './context';

// import components
import Header from './components/Header/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/:movieId' element={ <Movie /> } />
          <Route path='/*' element={ <NotFound /> } />
        </Routes>      
        <GlobalStyle />
      </UserProvider>
    </Router>
  );
}

export default App;