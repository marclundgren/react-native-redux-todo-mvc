/* eslint import/no-unresolved: 0 */
import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import FilterLink from '../containers/FilterLink';
import ClearCompleted from '../containers/ClearCompleted';
import styles from '../styles';

const componentStyles = StyleSheet.create({
  filtersContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 1000,
    borderColor: 'red',
    padding: 10,
  },
});


const Filters = () => (
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

const Footer = ({ hasTodos }) => {
  if (!hasTodos) {
    return (<View style={[componentStyles.container]} />);
  }

  return (
    <View style={[componentStyles.container]}>
      <ClearCompleted />
      <Filters />
    </View>
  );
};

Footer.propTypes = {
  hasTodos: PropTypes.bool.isRequired,
};

export default Footer;
