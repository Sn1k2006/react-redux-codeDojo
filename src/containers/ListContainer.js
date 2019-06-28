import React from 'react';
import List from "../components/List";
import {connect} from 'react-redux';

import {deleteTodo, editTodo, toggleTodo} from "../actions";
import {getFiltersTodos} from "../reducers";



function mapStateToProps(state) {
  return {
    todos: getFiltersTodos(state),
    fetching: state.fetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: (id) => dispatch(deleteTodo(id)),
    onToggle: (id) => dispatch(toggleTodo(id)),
    onEdit: (id, title) => dispatch(editTodo(id, title)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);