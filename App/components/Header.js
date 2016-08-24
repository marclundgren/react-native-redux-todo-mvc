import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import ToggleTodos from '../containers/ToggleTodos';

import styles from '../styles';
const _styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleAll: {
    flex: 3
  },
  heading: {
    flex: 5
  },
  empty: {
    flex: 3
  }
});

const Header = () => (
  <View style={[_styles.headerContainer]}>
    <View style={[_styles.empty]}></View>
    <Text style={[_styles.heading, styles.heading]}>todos</Text>
    <View style={[_styles.toggleAll]}>
      <ToggleTodos />
    </View>
  </View>
);

export default Header;
