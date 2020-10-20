import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { book } from './book';
import { Registration } from '../pages/registration';
import { Login } from '../pages/login';
import { Guardian } from '../bus/guardian/index';
import { Profile } from '../pages/profile';
import { Dashboard } from '../pages/dashboard';
import { Breakfast } from '../pages/breakfast';
import { Lunch } from '../pages/lunch';
import { Dinner } from '../pages/dinner';
import { Fruits } from '../pages/fruits';
import { Vegetables } from '../pages/vegetables';
import { Junk } from '../pages/junk';
import { Coffee } from '../pages/coffee';
import { Sleep } from '../pages/sleep';
import { Steps } from '../pages/steps';
import { Water } from '../pages/water';

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path = {book.registration}>
                    <Registration />
                </Route>
                <Route exact path = {book.login}>
                    <Login />
                </Route>
                <Guardian>
                    <Route exact path = {book.profile}>
                        <Profile />
                    </Route>
                    <Route exact path = {book.root}>
                        <Dashboard />
                    </Route>
                    <Route exact path = {book.breakfast}>
                        <Breakfast />
                    </Route>
                    <Route exact path = {book.lunch}>
                        <Lunch />
                    </Route>
                    <Route exact path = {book.dinner}>
                        <Dinner />
                    </Route>
                    <Route exact path = {book.fruits}>
                        <Fruits />
                    </Route>
                    <Route exact path = {book.vegetables}>
                        <Vegetables />
                    </Route>
                    <Route exact path = {book.junk}>
                        <Junk />
                    </Route>
                    <Route exact path = {book.coffee}>
                        <Coffee />
                    </Route>
                    <Route exact path = {book.sleep}>
                        <Sleep />
                    </Route>
                    <Route exact path = {book.steps}>
                        <Steps />
                    </Route>
                    <Route exact path = {book.water}>
                        <Water />
                    </Route>
                </Guardian>
            </Switch>
        </>
    )
}