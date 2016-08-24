import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Footer from '../containers/Footer';
import AddTodo from '../containers/AddTodo';
import Header from './Header';
import Info from './Info';
import VisibleTodoList from '../containers/VisibleTodoList';
import Container from './Container';
import styles from '../styles';

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  header: {
    flex: 1, marginTop: 10
  },
  addTodo: { flex: 1 },
  _addTodo: { flex: 1 },
  visibleTodoList: { flex: 5 },
  footer: { flex: 1 }
});

class App extends Component {
  render() {
    return (
      <View style={[_styles.container, styles.column]}>

        <View style={[_styles.header]}>
          <Header />
        </View>

        <View style={[_styles.addTodo, styles.centered]}>
          <AddTodo />
        </View>

        <View style={[_styles.visibleTodoList]}>
          <VisibleTodoList style={styles.column} />
        </View>

        <View style={[_styles.footer]}>
          <Footer/>
        </View>

      </View>
    );
  }
}

export default App;
