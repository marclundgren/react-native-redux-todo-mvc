import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { setInputValue } from '../actions';
import AddTodo from '../components/AddTodo';

const mapStateToProps = (state) => {
  console.log('mapping state to props...');
  console.log({
    state
  })
  return {
    inputVal: state.inputVal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeInputVal: (inputVal) => {
      console.log('setting InputValue ... ', inputVal);
      dispatch(setInputValue(inputVal));
    },
    addTodo: (text) => {
      console.log({text})
      dispatch(addTodo(text));
      dispatch(setInputValue(''));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
