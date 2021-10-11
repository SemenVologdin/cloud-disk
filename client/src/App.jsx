import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './reducers/userReducer';

import RegistrForm from './components/RegistrForm';
import LoginForm from './components/LoginForm';

import NavBar from './components/NavBar';
import Disk from './components/Disk';

const App = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  return (
    <Router>
      <div className="App">
        <NavBar
          exitBtn={() => {
            logOut();
            console.log('Кнопка нажата');
            localStorage.removeItem('token');
          }}
        />
        {!isAuth ? (
          <Switch>
            <Route path="/registration" component={RegistrForm} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Disk} />
            <Redirect to="/" />
          </Switch>
        )}
      </div>
    </Router>
  );
};

export default App;
