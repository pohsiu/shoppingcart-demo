import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers';
import theme from './theme';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);
function WrapReduxAndTheme() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  );
}
ReactDOM.render(<WrapReduxAndTheme />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
