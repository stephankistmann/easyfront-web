import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Units from '../pages/Units';
import Peers from '../pages/Peers';
import AddPeer from '../pages/AddPeer';
import EditPeer from '../pages/EditPeer';
import AddUnit from '../pages/AddUnit';
import Category from '../pages/Category';
import EditCategory from '../pages/EditCategory';
import AddCategory from '../pages/AddCategory';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import EditUnit from '../pages/EditUnit';
import DeleteUnit from '../pages/DeleteUnit';
import Access from '../pages/Access';
import AddAccess from '../pages/AddAccess';
import EditAccess from '../pages/EditAccess';
import ErrorPage from '../pages/ErrorPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/dashboard/:page?" component={Dashboard} isPrivate />
    <Route path="/units" component={Units} isPrivate exact />
    <Route path="/units/new" component={AddUnit} isPrivate exact />
    <Route path="/units/edit/:id" component={EditUnit} isPrivate />
    <Route path="/units/delete/:id" component={DeleteUnit} isPrivate />
    <Route path="/category" component={Category} isPrivate exact />
    <Route path="/category/new" component={AddCategory} isPrivate />
    <Route path="/category/edit/:id" component={EditCategory} isPrivate />
    <Route path="/access" component={Access} isPrivate exact />
    <Route path="/access/new" component={AddAccess} isPrivate />
    <Route path="/access/edit/:id" component={EditAccess} isPrivate />
    <Route path="/peers" exact component={Peers} isPrivate />
    <Route path="/peers/new" component={AddPeer} isPrivate />
    <Route path="/peers/edit/:id" component={EditPeer} isPrivate />
    <Route path="/error" component={ErrorPage} isPrivate />
  </Switch>
);

export default Routes;
