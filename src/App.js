import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/Users/UsersContainer';



const App = (props) => {
  return (

    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Route path="/Dialogs"
          render={() => <DialogsContainer />} />
        <Route path="/profile"
          render={() => <ProfileContainer />} />
        <Route path="/users"
          render={() => <UsersContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
        <div class='friends'>
          <Route path="/friends" component={Friends} />
        </div>
      </div>
      <Footer />
    </div>

  )
}



export default App;