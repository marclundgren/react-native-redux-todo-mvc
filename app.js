import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import App from './App/components/App';
import todoApp from './App/reducers';

let store = createStore(todoApp);

export default class ReactNativeReduxTodoMVC extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}
