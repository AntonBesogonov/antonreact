import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Head/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Message from './components/Messages/Message';
import MessageContainer from './components/Messages/MessageContainer';


const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />

      <header>
        <Link to="/profile">profile</Link>
        <div></div>
        <Link to="/messag">message</Link>
      </header>

      <Routes>
        <Route path="/profile" element={<Profile two={props.appState.dialogPro.qwerty} />} />
        <Route path="/messag" element={<Message store={props.store} two={props.appState.profilePage.compot} dispatch={props.dispatch}  /> }  />
      </Routes>
    </div>
  );
};

export default App;
