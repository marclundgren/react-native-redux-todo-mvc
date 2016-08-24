import { connect } from 'react-redux';
import { toggleAllCompleted, toggleAllInProgress } from '../actions';
import ToggleTodos from '../components/ToggleTodos';

const mapStateToProps = ({todos}) => {
  return {
    allTodosCompleted: todos.every(({completed}) => { return completed }),
    hasTodos: todos.length > 0
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleAllCompleted: (id) => {
      dispatch(toggleAllCompleted())
    },
    onToggleAllInProgress: (id) => {
      dispatch(toggleAllInProgress())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleTodos);
