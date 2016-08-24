import React, { PropTypes } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native';
import Todo from './Todo';
import Container from './Container';
import TodoCount from '../containers/TodoCount';
import styles from '../styles';
const _styles = StyleSheet.create({
  todos: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
});

const TodoList = ({ todos, onTodoClick, onTodoDestroy }) => {
  if (!todos.length) {
    return (
      <Container></Container>
    );
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
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDestroy: PropTypes.func.isRequired
};

export default TodoList;
