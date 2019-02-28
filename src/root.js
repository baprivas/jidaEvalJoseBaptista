import React from 'react';
import List from './components/list';
import ListCountries from './components/ListCountries';
import UserUpdateForm from './components/UserUpdateForm';
import Settings from './components/settings';
import { BrowserRouter, Route } from "react-router-dom";

const Root = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={List} />
      <Route path="/settings/countries"  component={ListCountries} />
      <Route  exact path="/settings" component={Settings} />
      <Route  exact path="/form/:user_id" component={UserUpdateForm} />
    </React.Fragment>
  </BrowserRouter>
);

export default Root;
