import React from 'react';
import FilterLink from '../containers/FilterLink';
import ClearCompleted from '../containers/ClearCompleted';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import styles from '../styles';
const _styles = StyleSheet.create({
  filtersContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 1000,
    borderColor: 'red',
    padding: 10
  }
});


const Filters = () => {
  return (
    <View style={[styles.row]}>
      <View style={[styles.item, styles.centered]}>
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
      </View>
      <View style={[styles.item, styles.centered]}>
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
      </View>
      <View style={[styles.item, styles.centered]}>
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </View>
    </View>
  );
};

const Footer = ({onClearCompleted, hasTodos}) => {
  if (!hasTodos) {
    return (<View style={[_styles.container]}></View>);
  }

  return (
    <View style={[_styles.container]}>
      <ClearCompleted />
      <Filters />
    </View>
  );
};
export default Footer;
