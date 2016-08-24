import { connect } from 'react-redux';
import { clearCompleted } from '../actions';
import ClearCompleted from '../components/ClearCompleted';

const mapStateToProps = ({todos}) => {
  return {
    hasCompletedTodos: todos.some(({completed}) => { return completed; })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClearCompleted: () => {
      dispatch(clearCompleted());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearCompleted);
