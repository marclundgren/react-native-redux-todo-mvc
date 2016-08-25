/* eslint import/no-unresolved: 0 */
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Footer from '../containers/Footer';
import AddTodo from '../containers/AddTodo';
import Header from './Header';
import VisibleTodoList from '../containers/VisibleTodoList';
import styles from '../styles';

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  header: {
    flex: 1,
    marginTop: 10,
  },
  addTodo: { flex: 1 },
  visibleTodoList: { flex: 5 },
  footer: { flex: 1 },
});

const App = () => (
  <View style={[componentStyles.container, styles.column]}>

    <View style={[componentStyles.header]}>
      <Header />
    </View>

    <View style={[componentStyles.addTodo, styles.centered]}>
      <AddTodo />
    </View>

    <View style={[componentStyles.visibleTodoList]}>
      <VisibleTodoList style={styles.column} />
    </View>

    <View style={[componentStyles.footer]}>
      <Footer />
    </View>

  </View>
);

export default App;
