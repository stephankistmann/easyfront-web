import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

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

import Invite from '../pages/Invite';
import InviteAdd from '../pages/InviteAdd';
import InviteEdit from '../pages/InviteEdit';

import LockerRoom from '../pages/LockerRoom';
import VolumesAdd from '../pages/VolumesAdd';

import Deliveries from '../pages/Deliveries';

import ErrorPage from '../pages/ErrorPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signin" component={SignIn} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/error" component={ErrorPage} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />

    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password/:token/:user" component={ResetPassword} />

    <Route path="/invites" component={Invite} isPrivate exact />
    <Route path="/invites/new" component={InviteAdd} isPrivate />
    <Route path="/invites/edit/:id" component={InviteEdit} isPrivate />

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

    <Route path="/lockerroom" exact component={LockerRoom} isPrivate />
    <Route path="/lockerroom/new" exact component={VolumesAdd} isPrivate />

    <Route path="/deliveries" exact component={Deliveries} isPrivate />
  </Switch>
);

export default Routes;
