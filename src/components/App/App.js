import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import CardCascadePage from '../../pages/CardCascadePage/CardCascadePage';
import Header from '../Header/Header';
import CardFlowersPage from '../../pages/CardFlowersPage/CardFlowersPage';

// TODO: Remove styled-components after refactor 

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/card_cascade" component={CardCascadePage} />
        <Route path="/card_flowers" component={CardFlowersPage} />
      </Switch>
    </div>
  );
};

export default App;
