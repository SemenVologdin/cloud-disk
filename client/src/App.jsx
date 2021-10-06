import React from 'react';
import { BrowserRouter as Router, NavLink, Switch } from 'react-router-dom';

import RegistrForm from './components/RegistrForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <NavLink to="/registration" component={RegistrForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
