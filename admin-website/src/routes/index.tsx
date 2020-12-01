import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Units from '../pages/Units';
import Peers from '../pages/Peers';
import AddPeer from '../pages/AddPeer';
import AddUnit from '../pages/AddUnit';
import AddUnitEmergency from '../pages/AddUnitEmergency';
import Category from '../pages/Category';
import AddCategory from '../pages/AddCategory';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import EditUnit from '../pages/EditUnit';
import DeleteUnit from '../pages/DeleteUnit';
import Access from '../pages/Access';
import NewAccess from '../pages/NewAccess';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/dashboard/:page?" component={Dashboard} isPrivate />
    <Route path="/units" component={Units} isPrivate exact />
    <Route path="/units/new" component={AddUnit} isPrivate exact />
    <Route path="/units/new/emergency" component={AddUnitEmergency} isPrivate />
    <Route path="/units/edit/:id" component={EditUnit} isPrivate />
    <Route path="/units/delete/:id" component={DeleteUnit} isPrivate />
    <Route path="/category" component={Category} isPrivate exact />
    <Route path="/category/new" component={AddCategory} isPrivate />
    <Route path="/acesses" component={Access} isPrivate exact />
    <Route path="/acesses/new" component={NewAccess} isPrivate />
    <Route path="/peers" exact component={Peers} isPrivate />
    <Route path="/newpeer" component={AddPeer} isPrivate />
  </Switch>
);

export default Routes;
