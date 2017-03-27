import { GET_USERS, GET_USER } from '../actions';

const INITIAL_STATE = {
  all: [],
  user: null
}

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_USERS:
      return { ...state, all: action.payload.data };
    case GET_USER:
      return { ...state, user: action.payload.data };
    default:
      return state;
  }
}
