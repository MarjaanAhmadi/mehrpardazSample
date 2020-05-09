// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => null;

const Home = Loadable({
  loader: () => import('../containers/HomeContainer'),
  loading: Loading,
});

const Products = Loadable({
  loader: () => import('../containers/ProductContainer'),
  loading: Loading,
});

const ProductItem = Loadable({
  loader: () => import('../components/Products/ProductItem'),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import('../containers/NotFoundContainer'),
  loading: Loading,
});

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/product" component={ProductItem} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
