

export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';


// (dispatch) => {
//   dispatch({type: REQUEST_TODOS});
//   return axios('http://localhost:3000/api/todos')
//     .then((response) => response.data)
//     .then((todos) => dispatch({
//       type: GET_TODOS,
//       todos
//     }));
// }


// axios.post('http://localhost:3000/api/todos', {title})
//   .then(response => response.data)
//   .then(todo => ({
//     type: ADD_TODO,
//     todo
//   }));

// axios.delete(`http://localhost:3000/api/todos/${id}`)
//   .then(response => ({
//     type: DELETE_TODO,
//     id
//   }))

// axios.patch(`http://localhost:3000/api/todos/${id}`)
//   .then(response => response.data)
//   .then(todo => ({
//     type: TOGGLE_TODO,
//     todo
//   }));


export const getTodos = () => {
  return {
    type: GET_TODOS,
    request: {
      method: 'get',
      url: '/todos'
    }
  }
};

export function addTodo(title) {
  return {
    type: ADD_TODO,
    request: {
      method: 'post',
      url: '/todos',
      body: {title}
    }
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    request: {
      method: 'delete',
      url: `/todos/${id}`
    }
  }
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    request: {
      method: 'patch',
      url: `/todos/${id}`,
    }
  }
}

export function editTodo(id, title) {
  return {
    type: EDIT_TODO,
    request: {
      method: 'edit',
      url: `/todos/${id}`,
      body: {title}
    }
  }
}

