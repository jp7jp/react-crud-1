import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const CREATE_USER = 'CREATE_USER';

export const getUsers = () => {
  const request = axios.get('http://localhost:3001/users');

  return {
    type: GET_USERS,
    payload: request
  }
}

export const getUser = (id) => {
  const request = axios.get(`http://localhost:3001/users/${id}`);

  return {
    type: GET_USER,
    payload: request
  }
}

export const createUser = (user) => {
  const request = axios.post('http://localhost:3001/users', user);

  return {
    type: CREATE_USER,
    payload: request
  }
}
