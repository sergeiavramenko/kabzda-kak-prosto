import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/nav';
import Profile from './components/profile';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />

    </div>

  );
}

export default App;
