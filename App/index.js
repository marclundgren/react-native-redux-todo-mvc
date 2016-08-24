import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';

import App from './components/App';
import todoApp from './reducers';

let store = createStore(todoApp);

const ReactNativeReduxTodoMVC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReactNativeReduxTodoMVC;
