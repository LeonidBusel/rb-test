import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer, Navigation, CourseList } from "components";

import './app.less';

export default class App extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <Header />
                <div className="content-wrapper">
                    <Switch>
                        <Route path="/course/:courseId">
                            <Navigation />
                            <CourseList />
                        </Route>
                        <Route path="/">
                            <Navigation />
                            <CourseList />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}