import { connect } from 'react-redux';
import { clearCompleted } from '../actions';
import Footer from '../components/Footer';

const mapStateToProps = ({todos}) => {
  return {
    hasTodos: todos.length > 0
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
)(Footer);
