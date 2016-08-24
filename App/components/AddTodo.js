import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from 'react-native';
import Dimensions from 'Dimensions';

import styles from '../styles';
const { height, width } = Dimensions.get('window');

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  input: {
    flex: 1,
    alignSelf: 'center',
    padding: 10,
    width: (width * 0.75), // temp hack. use flexbox instead
  }
});


// console.log({inputVal, changeInputVal, addTodo})
let AddTodo = ({ inputVal, changeInputVal, addTodo }) => {
  // const addTodoWrapper = (val) => {
  //   debugger
  //   return addTodo(val);
  // };

  console.log({inputVal})
  return (
    <TextInput
      placeholder='What needs to be done?'
      style={[_styles.input, styles.bordered, styles.borderColorPrimary]}
      blurOnSubmit={true}
      returnKeyType='done'
      onChangeText={(text) => changeInputVal(text)}
      onEndEditing={() => addTodo(inputVal)}
      />
  );
};

AddTodo.propTypes = {
  inputVal: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired,
  changeInputVal: PropTypes.func.isRequired,
};

export default AddTodo;
