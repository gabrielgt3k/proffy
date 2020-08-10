import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

const Routes: React.FC = () => {
  return (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/study" exact component={TeacherList} />
        <Route path="/give-classes" exact component={TeacherForm} />
      </Switch>
  )
}

export default Routes;