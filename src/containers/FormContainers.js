import React from 'react';
import Form from "../components/Form";
import {addTodo} from "../actions";
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: title => dispatch(addTodo(title))
  }
};

const FormContainers = connect(null,mapDispatchToProps)(Form);

export default FormContainers;