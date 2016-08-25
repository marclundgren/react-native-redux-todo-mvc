/* eslint import/no-unresolved: 0 */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import ToggleTodos from '../containers/ToggleTodos';
import styles from '../styles';

const componentStyles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleAll: {
    flex: 3,
  },
  heading: {
    flex: 5,
  },
  empty: {
    flex: 3,
  },
});

const Header = () => (
  <View style={[componentStyles.headerContainer]}>
    <View style={[componentStyles.empty]} />
    <Text style={[componentStyles.heading, styles.heading]}>todos</Text>
    <View style={[componentStyles.toggleAll]}>
      <ToggleTodos />
    </View>
  </View>
);

export default Header;
