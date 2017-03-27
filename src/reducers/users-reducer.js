import {
  GET_USERS,
  GET_USER,
  CREATE_USER
} from '../actions';

const INITIAL_STATE = {
  all: [],
  user: null,
  newUser: null,
  error: ''
}

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_USERS:
      return { ...state, all: action.payload.data };
    case GET_USER:
      return { ...state, user: action.payload.data };
    case CREATE_USER:
      if (action.error) {
        return { ...state, error: 'Unable to create user' };
      }
      return { ...state, all: [ ...state.all, action.payload.data ], error: '' };
    default:
      return state;
  }
}
