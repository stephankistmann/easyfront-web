import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

import Units from '../pages/Units';
import UnitAdd from '../pages/UnitAdd';
import UnitEdit from '../pages/UnitEdit';

import Peers from '../pages/Peers';
import PeerAdd from '../pages/PeerAdd';
import PeerEdit from '../pages/PeerEdit';

import Category from '../pages/Category';
import CategoryEdit from '../pages/CategoryEdit';
import CategoryAdd from '../pages/CategoryAdd';

import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Access from '../pages/Access';
import AccessAdd from '../pages/AccessAdd';
import AccessEdit from '../pages/AccessEdit';

import ErrorPage from '../pages/ErrorPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password/:token/:user" component={ResetPassword} />
    <Route path="/dashboard/:page?" component={Dashboard} isPrivate />
    <Route path="/units" component={Units} isPrivate exact />
    <Route path="/units/new" component={UnitAdd} isPrivate exact />
    <Route path="/units/edit/:id" component={UnitEdit} isPrivate />
    <Route path="/category" component={Category} isPrivate exact />
    <Route path="/category/new" component={CategoryAdd} isPrivate />
    <Route path="/category/edit/:id" component={CategoryEdit} isPrivate />
    <Route path="/access" component={Access} isPrivate exact />
    <Route path="/access/new" component={AccessAdd} isPrivate />
    <Route path="/access/edit/:id" component={AccessEdit} isPrivate />
    <Route path="/peers" exact component={Peers} isPrivate />
    <Route path="/peers/new" component={PeerAdd} isPrivate />
    <Route path="/peers/edit/:id" component={PeerEdit} isPrivate />
    <Route path="/error" component={ErrorPage} isPrivate />
  </Switch>
);

export default Routes;
