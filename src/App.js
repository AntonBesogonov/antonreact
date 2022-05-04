import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Head/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/redux/Dialogs';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />

      <header>
        <Link to="/profile">profile</Link>
        <div></div>
        <Link to="/messag">Сообщения</Link>
      </header>

      <Routes>
        <Route
          path="/profile"
          element={
            <Profile
              /*two={props.appState.getState().dialogPro.qwerty}*/ />}
        />

        <Route
          path="/messag"
          element={
            <Dialogs
              /*store={props.appState}
              dispatch={props.update} two={ compot
              }*/
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
