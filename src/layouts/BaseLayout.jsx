import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Redirect, Switch } from 'react-router-dom';

function BaseLayout(props) {
  return (
    <div className='layout-page'>
      <Switch>
        {
          renderRoutes(props.route.routes)
        }
        <Redirect from='/app' to='/app/login' />
      </Switch>
    </div>
  );
}

export default BaseLayout;
