import React, { PropTypes } from 'react';
import {
  ScrollView,
} from 'react-native';
import Todo from './Todo';
import TodoCount from '../containers/TodoCount';

const TodoList = ({ todos, onTodoClick, onTodoDestroy }) => {
  if (!todos.length) {
    return (<ScrollView />);
  }

  return (
    <ScrollView>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onToggle={() => onTodoClick(todo.id)}
          onDestroy={() => onTodoDestroy(todo.id)}
        />
      )}
      <TodoCount />
    </ScrollView>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDestroy: PropTypes.func.isRequired,
};

export default TodoList;
