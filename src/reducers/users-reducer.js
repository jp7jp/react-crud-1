import { GET_USERS } from '../actions';

const INITIAL_STATE = {
  all: [],
  user: null
}

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_USERS:
      console.log(action.payload.data);
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
