// @flow
import '@babel/polyfill';
import 'intersection-observer';
import * as React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import {useSelector} from 'react-redux';

import App from './components/App';
import store from './config/redux/store';
import * as serviceWorker from './serviceWorker';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/styles';
const useStyles = makeStyles({
  blur: {
    filter: "blur(8px)"
  },
  loading: {
    width: 40,
    height: 40,
    position: "fixed",
    top: '40%',
    right: '45%'
  }
})
const theme = {
  brandPrimary: '#1abedb',
  textMuted: '#707070',
  baseColor: '#171717',
};

const initialState = {};

const rootElement = document.getElementById('root');
const ReactApp = () => {
  
  const classes = useStyles();
  const loading = false;
  // const loading = useSelector(state => state.loading);
  return(
    <ThemeProvider theme={theme}>
    <div dir='rtl'>
      <React.Fragment>
      <BrowserRouter>
        <Provider store={store}>
          <div className={loading ? classes.blur : ''}>
            <App />
          </div>
        </Provider>
      </BrowserRouter>
      {
        loading ? 
        <CircularProgress className={classes.loading}/>
        : ''
      }
      </React.Fragment>
    </div>
  </ThemeProvider>
  )
}


if (rootElement == null) {
  throw new Error('no rootElement');
} else {
  ReactDOM.render(<ReactApp />, rootElement);
}

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <ReactApp />,
      rootElement,
    );
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
