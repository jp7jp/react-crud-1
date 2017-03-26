import axios from 'axios';

export const GET_USERS = 'GET_USERS';

export const getUsers = () => {
  const request = axios.get('http://localhost:3001/users');

  return {
    type: GET_USERS,
    payload: request
  }
}
