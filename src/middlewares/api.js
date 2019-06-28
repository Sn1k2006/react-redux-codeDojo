import axios from 'axios';

const apiMiddleware = apiUrl => store => next => action => {
  if (!action.request) {
    return next(action);
  }

  let REQUEST, SUCCESS, FAILURE;

  if(action.types) {
    [REQUEST, SUCCESS, FAILURE] = action.types;
  } else {
    REQUEST = `${action.type}_REQUEST`;
    SUCCESS = action.type;
    FAILURE = `${action.type}_FAILURE`;
  }

  next({type: REQUEST});

  return axios[action.request.method](`${apiUrl}${action.request.url}`, action.request.body)
    .then(({data}) => next({
      type: SUCCESS,
      data
    }))
    .catch(e => next({
      type: FAILURE,
      error: e.message
    }))
};

export default apiMiddleware;