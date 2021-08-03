import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { Profile } from '../pages/Profile';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/cart" component={Cart}/>
    <Route path="/profile" component={Profile}/>
  </Switch>
);
