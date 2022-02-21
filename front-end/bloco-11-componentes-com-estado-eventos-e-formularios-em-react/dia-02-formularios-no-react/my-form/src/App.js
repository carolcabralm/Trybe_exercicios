import './App.css';
import PersonalForm from './PersonalForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/PersonalForm" component={ PersonalForm } />
          </Switch>
        </BrowserRouter>
    );
  }  
}

export default App;
