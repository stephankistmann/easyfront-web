import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Peers from '../pages/Peers';
import AddPeer from '../pages/AddPeer';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/dashboard/:page?" component={Dashboard} isPrivate />
    <Route path="/peers/:page?" exact component={Peers} isPrivate />
    <Route path="/peers/new" component={AddPeer} isPrivate />
  </Switch>
);

export default Routes;
