import React from 'react';
import './index.css';
import CardComponent from './CardComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import InputForm from './InputForm';


require('dotenv').config();



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/cards'>
            <CardComponent />
          </Route>
          <Route path='/'>
            <InputForm />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
