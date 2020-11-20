import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import UserContainer from './components/UserContainer'
import Login from './components/login/Login'
import UserManagement from './components/userManagement/UserManagement'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      {/* <div className="App">
        <CakeContainer></CakeContainer>
        <HooksCakeContainer></HooksCakeContainer>
        <UserContainer></UserContainer>
        <Login></Login>
      </div> */}
      <Router>
        <Switch>
          <Route path="/userManagement">
            <UserManagement />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
