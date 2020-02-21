import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import theme from './theme';
import App from './App';

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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WrapReduxAndTheme />, div);
  ReactDOM.unmountComponentAtNode(div);
});