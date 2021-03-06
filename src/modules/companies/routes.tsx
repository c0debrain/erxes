import queryString from 'query-string';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { CompaniesList, CompanyDetails } from './containers';

const details = ({ match }) => {
  const id = match.params.id;

  return <CompanyDetails id={id} />;
};

const list = ({ location }) => {
  const queryParams = queryString.parse(location.search);

  return <CompaniesList queryParams={queryParams} />;
};

const routes = () => {
  return (
    <React.Fragment>
      <Route
        path="/companies/details/:id"
        exact={true}
        key="/companies/details/:id"
        component={details}
      />

      <Route path="/companies" exact={true} key="/companies" component={list} />
    </React.Fragment>
  );
};

export default routes;
