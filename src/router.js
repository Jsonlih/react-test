import React from 'react';
import { Router, Route, Switch, IndexRoute, Redirect } from 'dva/router';
import 'antd/dist/antd.css'
// import IndexPage from './routes/IndexPage';
import Main from './routes/layout/main'



function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Route path="/" component={Main}>
        </Route>
    </Router>
  );
}

export default RouterConfig;
