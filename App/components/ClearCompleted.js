import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import styles from '../styles';

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ClearCompleted = ({ onClearCompleted, hasCompletedTodos }) => {
  if (!hasCompletedTodos) {
    return (<View style={componentStyles.container} />);
  }

  return (
    <TouchableOpacity
      onPress={onClearCompleted}
      style={[styles.centered, styles.row, styles.backgroundSecondary]}
    >

      <Text style={[styles.white, styles.strong, styles.centered, styles.centeredText]}>
        Clear Completed
      </Text>

    </TouchableOpacity>
  );
};

ClearCompleted.propTypes = {
  onClearCompleted: PropTypes.func.isRequired,
  hasCompletedTodos: PropTypes.bool.isRequired,
};

export default ClearCompleted;
