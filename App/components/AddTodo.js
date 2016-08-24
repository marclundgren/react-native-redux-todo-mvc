// import/no-extraneous-dependencies
import React, { PropTypes } from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';
import Dimensions from 'Dimensions';
import styles from '../styles';

const { width } = Dimensions.get('window');
const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  input: {
    flex: 1,
    alignSelf: 'center',
    padding: 10,
    width: (width * 0.75), // temp hack. use flexbox instead
  },
});

const AddTodo = ({ inputVal, changeInputVal, addTodo }) => (
  <TextInput
    placeholder="What needs to be done?"
    style={[componentStyles.input, styles.bordered, styles.borderColorPrimary]}
    returnKeyType="done"
    onChangeText={(text) => changeInputVal(text)}
    onEndEditing={() => addTodo(inputVal)}
  />
);

AddTodo.propTypes = {
  inputVal: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
  changeInputVal: PropTypes.func.isRequired,
};

export default AddTodo;
