import { connect } from 'react-redux'
import TodoCount from '../components/TodoCount'

const mapStateToProps = (state) => {
  return {
    count: state.todos.reduce((total, todo) => {
      if (!todo.completed) {
        return total + 1;
      }
      return total;
    }, 0)
  }
}

export default connect(
  mapStateToProps
)(TodoCount)
