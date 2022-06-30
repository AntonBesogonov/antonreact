import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Head/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Messages/MessageContainer';
import Users from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />

      <header>
        <Link to="/profile">Профиль</Link>
        <div></div>
        <Link to="/messag">Сообщения</Link>
        <div></div>
        <Link to="/users">Пользователи</Link>

      </header>

      <Routes>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/messag" element={<Dialogs/>} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
