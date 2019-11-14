import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoute';

const AppNavigation = () => (
    <>
        <Switch>
            <PrivateRoute component={Dashboard}/>
        </Switch>
    </>
);


export default AppNavigation;