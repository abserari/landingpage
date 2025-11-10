import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import BlankLayout from '@/layouts/BlankLayout';

const AppRouter = () => {
  return (
    <Router>
      <BlankLayout>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BlankLayout>
    </Router>
  );
};

export default AppRouter;
