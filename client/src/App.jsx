import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './reducers/userReducer';

import RegistrForm from './components/RegistrForm';
import LoginForm from './components/LoginForm';

const App = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  return (
    <Router>
      <div className="App">
        {!isAuth ? (
          <Switch>
            <Route path="/registration" component={RegistrForm} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        ) : (
          <div className="wrapper">
            <div className="header">
              <h2>Вы вошли в аккаунт</h2>
              <button
                className="button"
                onClick={() => {
                  logOut();
                  console.log('Кнопка нажата');
                  localStorage.removeItem('token');
                }}>
                Выйти
              </button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
