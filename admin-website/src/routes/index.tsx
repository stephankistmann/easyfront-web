import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Units from '../pages/Units';
import Peers from '../pages/Peers';
import AddPeer from '../pages/AddPeer';
import AddUnit from '../pages/AddUnitData';
import AddUnitEmergency from '../pages/AddUnitEmergency';
import UnitCategory from '../pages/UnitCategory';
import AddUnitCategory from '../pages/AddUnitCategory';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/dashboard/:page?" component={Dashboard} isPrivate />
    <Route path="/units" component={Units} isPrivate exact />
    <Route path="/newunit" component={AddUnit} isPrivate exact />
    <Route path="/newunit/emergency" component={AddUnitEmergency} isPrivate />
    <Route path="/units/category" component={UnitCategory} isPrivate exact />
    <Route path="/units/category/new" component={AddUnitCategory} isPrivate />
    <Route path="/peers" exact component={Peers} isPrivate />
    <Route path="/newpeer" component={AddPeer} isPrivate />
  </Switch>
);

export default Routes;
